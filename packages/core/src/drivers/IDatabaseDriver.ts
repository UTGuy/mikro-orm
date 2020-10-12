import { EntityData, EntityMetadata, EntityProperty, AnyEntity, FilterQuery, Primary, Dictionary, QBFilterQuery, IPrimaryKey, Populate, PopulateOptions } from '../typings';
import { Connection, QueryResult, Transaction } from '../connections';
import { LockMode, QueryOrderMap, QueryFlag, LoadStrategy } from '../enums';
import { Platform } from '../platforms';
import { MetadataStorage } from '../metadata';
import { Collection } from '../entity';
import { EntityManager } from '../EntityManager';
import { DriverException } from '../exceptions';

export const EntityManagerType = Symbol('EntityManagerType');

export interface IDatabaseDriver<C extends Connection = Connection> {

  [EntityManagerType]: EntityManager<this>;

  createEntityManager<D extends IDatabaseDriver = IDatabaseDriver>(useContext?: boolean): D[typeof EntityManagerType];

  connect(): Promise<C>;

  close(force?: boolean): Promise<void>;

  reconnect(): Promise<C>;

  getConnection(type?: 'read' | 'write'): C;

  /**
   * Finds selection of entities
   */
  find<T extends AnyEntity<T>>(entityName: string, where: FilterQuery<T>, options?: FindOptions<T>, ctx?: Transaction): Promise<EntityData<T>[]>;

  /**
   * Finds single entity (table row, document)
   */
  findOne<T extends AnyEntity<T>>(entityName: string, where: FilterQuery<T>, options?: FindOneOptions<T>, ctx?: Transaction): Promise<EntityData<T> | null>;

  nativeInsert<T extends AnyEntity<T>>(entityName: string, data: EntityData<T>, ctx?: Transaction): Promise<QueryResult>;

  nativeInsertMany<T extends AnyEntity<T>>(entityName: string, data: EntityData<T>[], ctx?: Transaction, processCollections?: boolean): Promise<QueryResult>;

  nativeUpdate<T extends AnyEntity<T>>(entityName: string, where: FilterQuery<T>, data: EntityData<T>, ctx?: Transaction): Promise<QueryResult>;

  nativeUpdateMany<T extends AnyEntity<T>>(entityName: string, where: FilterQuery<T>[], data: EntityData<T>[], ctx?: Transaction, processCollections?: boolean): Promise<QueryResult>;

  nativeDelete<T extends AnyEntity<T>>(entityName: string, where: FilterQuery<T>, ctx?: Transaction): Promise<QueryResult>;

  syncCollection<T, O>(collection: Collection<T, O>, ctx?: Transaction): Promise<void>;

  count<T extends AnyEntity<T>>(entityName: string, where: FilterQuery<T>, options?: CountOptions<T>, ctx?: Transaction): Promise<number>;

  aggregate(entityName: string, pipeline: any[]): Promise<any[]>;

  mapResult<T extends AnyEntity<T>>(result: EntityData<T>, meta: EntityMetadata, populate?: PopulateOptions<T>[]): EntityData<T> | null;

  /**
   * When driver uses pivot tables for M:N, this method will load identifiers for given collections from them
   */
  loadFromPivotTable<T extends AnyEntity<T>, O extends AnyEntity<O>>(prop: EntityProperty, owners: Primary<O>[][], where?: FilterQuery<T>, orderBy?: QueryOrderMap, ctx?: Transaction): Promise<Dictionary<T[]>>;

  getPlatform(): Platform;

  setMetadata(metadata: MetadataStorage): void;

  ensureIndexes(): Promise<void>;

  /**
   * Returns name of the underlying database dependencies (e.g. `mongodb` or `mysql2`)
   * for SQL drivers it also returns `knex` in the array as connectors are not used directly there
   */
  getDependencies(): string[];

  lockPessimistic<T extends AnyEntity<T>>(entity: T, mode: LockMode, ctx?: Transaction): Promise<void>;

  /**
   * Converts native db errors to standardized driver exceptions
   */
  convertException(exception: Error): DriverException;

}

export interface FindOptions<T, P extends Populate<T> = Populate<T>> {
  populate?: P;
  orderBy?: QueryOrderMap;
  limit?: number;
  offset?: number;
  refresh?: boolean;
  convertCustomTypes?: boolean;
  fields?: string[];
  schema?: string;
  flags?: QueryFlag[];
  groupBy?: string | string[];
  having?: QBFilterQuery<T>;
  strategy?: LoadStrategy;
  filters?: Dictionary<boolean | Dictionary> | string[] | boolean;
}

export interface FindOneOptions<T, P extends Populate<T> = Populate<T>> extends Omit<FindOptions<T, P>, 'limit' | 'offset'> {
  lockMode?: LockMode;
  lockVersion?: number | Date;
}

export interface FindOneOrFailOptions<T, P extends Populate<T> = Populate<T>> extends FindOneOptions<T, P> {
  failHandler?: (entityName: string, where: Dictionary | IPrimaryKey | any) => Error;
}

export interface CountOptions<T>  {
  filters?: Dictionary<boolean | Dictionary> | string[] | boolean;
  schema?: string;
  groupBy?: string | string[];
  having?: QBFilterQuery<T>;
}

export interface UpdateOptions<T>  {
  filters?: Dictionary<boolean | Dictionary> | string[] | boolean;
}

export interface DeleteOptions<T>  {
  filters?: Dictionary<boolean | Dictionary> | string[] | boolean;
}
