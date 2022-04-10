"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4563],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return y}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(n),y=a,h=m["".concat(l,".").concat(y)]||m[y]||u[y]||r;return n?i.createElement(h,o(o({ref:t},p),{},{components:n})):i.createElement(h,o({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<r;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58961:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var i=n(83117),a=n(80102),r=(n(67294),n(3905)),o=["components"],s={title:"Working with Entity Manager",sidebar_label:"Entity Manager"},l=void 0,d={unversionedId:"entity-manager",id:"version-2.7/entity-manager",title:"Working with Entity Manager",description:"Persist and flush",source:"@site/versioned_docs/version-2.7/entity-manager.md",sourceDirName:".",slug:"/entity-manager",permalink:"/docs/2.7/entity-manager",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-2.7/entity-manager.md",tags:[],version:"2.7",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1649597097,formattedLastUpdatedAt:"4/10/2022",frontMatter:{title:"Working with Entity Manager",sidebar_label:"Entity Manager"},sidebar:"version-2.7/docs",previous:{title:"Defining entities",permalink:"/docs/2.7/defining-entities"},next:{title:"Entity Repository",permalink:"/docs/2.7/repositories"}},p={},u=[{value:"Persist and flush",id:"persist-and-flush",level:2},{value:"Persisting and cascading",id:"persisting-and-cascading",level:2},{value:"Auto flushing",id:"auto-flushing",level:3},{value:"Fetching entities with EntityManager",id:"fetching-entities-with-entitymanager",level:2},{value:"Fetching partial entities",id:"fetching-partial-entities",level:3},{value:"Type of fetched entities",id:"type-of-fetched-entities",level:2},{value:"Entity repositories",id:"entity-repositories",level:2},{value:"EntityManager API",id:"entitymanager-api",level:2},{value:"<code>getRepository&lt;T extends IEntity&gt;(entityName: string | EntityClass&lt;T&gt;): EntityRepository&lt;T&gt;</code>",id:"getrepositoryt-extends-ientityentityname-string--entityclasst-entityrepositoryt",level:4},{value:"<code>find&lt;T extends IEntity&gt;(entityName: string | EntityClass&lt;T&gt;, where?: FilterQuery&lt;T&gt;, options?: FindOptions): Promise&lt;T[]&gt;</code>",id:"findt-extends-ientityentityname-string--entityclasst-where-filterqueryt-options-findoptions-promiset",level:4},{value:"<code>find&lt;T extends IEntity&gt;(entityName: string | EntityClass&lt;T&gt;, where?: FilterQuery&lt;T&gt;, populate?: string[], orderBy?: { [k: string]: QueryOrder }, limit?: number, offset?: number): Promise&lt;T[]&gt;</code>",id:"findt-extends-ientityentityname-string--entityclasst-where-filterqueryt-populate-string-orderby--k-string-queryorder--limit-number-offset-number-promiset",level:4},{value:"<code>findOne&lt;T extends IEntity&gt;(entityName: string | EntityClass&lt;T&gt;, where: FilterQuery&lt;T&gt; | string, populate?: string[]): Promise&lt;T | null&gt;</code>",id:"findonet-extends-ientityentityname-string--entityclasst-where-filterqueryt--string-populate-string-promiset--null",level:4},{value:"<code>merge&lt;T extends IEntity&gt;(entityName: string | EntityClass&lt;T&gt;, data: EntityData&lt;T&gt;): T</code>",id:"merget-extends-ientityentityname-string--entityclasst-data-entitydatat-t",level:4},{value:"<code>map&lt;T extends IEntity&gt;(entityName: string | EntityClass&lt;T&gt;, data: EntityData&lt;T&gt;): T</code>",id:"mapt-extends-ientityentityname-string--entityclasst-data-entitydatat-t",level:4},{value:"<code>getReference&lt;T extends IEntity&gt;(entityName: string | EntityClass&lt;T&gt;, id: string): T</code>",id:"getreferencet-extends-ientityentityname-string--entityclasst-id-string-t",level:4},{value:"<code>count(entityName: string | EntityClass&lt;T&gt;, where: any): Promise&lt;number&gt;</code>",id:"countentityname-string--entityclasst-where-any-promisenumber",level:4},{value:"<code>persist(entity: IEntity | IEntity[], flush?: boolean): Promise&lt;void&gt;</code>",id:"persistentity-ientity--ientity-flush-boolean-promisevoid",level:4},{value:"<code>persistAndFlush(entity: IEntity | IEntity[]): Promise&lt;void&gt;</code>",id:"persistandflushentity-ientity--ientity-promisevoid",level:4},{value:"<code>persistLater(entity: IEntity | IEntity[]): void</code>",id:"persistlaterentity-ientity--ientity-void",level:4},{value:"<code>flush(): Promise&lt;void&gt;</code>",id:"flush-promisevoid",level:4},{value:"<code>remove(entityName: string | EntityClass&lt;T&gt;, where: IEntity | any, flush?: boolean): Promise&lt;number&gt;</code>",id:"removeentityname-string--entityclasst-where-ientity--any-flush-boolean-promisenumber",level:4},{value:"<code>removeEntity(entity: IEntity, flush?: boolean): Promise&lt;number&gt;</code>",id:"removeentityentity-ientity-flush-boolean-promisenumber",level:4},{value:"<code>removeAndFlush(entity: IEntity): Promise&lt;void&gt;</code>",id:"removeandflushentity-ientity-promisevoid",level:4},{value:"<code>removeLater(entity: IEntity): void</code>",id:"removelaterentity-ientity-void",level:4},{value:"<code>clear(): void</code>",id:"clear-void",level:4},{value:"<code>canPopulate(entityName: string | EntityClass&lt;T&gt;, property: string): boolean</code>",id:"canpopulateentityname-string--entityclasst-property-string-boolean",level:4}],m={toc:u};function y(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"persist-and-flush"},"Persist and flush"),(0,r.kt)("p",null,"There are 2 methods we should first describe to understand how persisting works in MikroORM:\n",(0,r.kt)("inlineCode",{parentName:"p"},"em.persist()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"em.flush()"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"em.persist(entity, flush?: boolean)")," is used to mark new entities for future persisting.\nIt will make the entity managed by given ",(0,r.kt)("inlineCode",{parentName:"p"},"EntityManager")," and once ",(0,r.kt)("inlineCode",{parentName:"p"},"flush")," will be called, it\nwill be written to the database. Second boolean parameter can be used to invoke ",(0,r.kt)("inlineCode",{parentName:"p"},"flush"),"\nimmediately. Its default value is configurable via ",(0,r.kt)("inlineCode",{parentName:"p"},"autoFlush")," option."),(0,r.kt)("p",null,"To understand ",(0,r.kt)("inlineCode",{parentName:"p"},"flush"),", lets first define what managed entity is: An entity is managed if\nit\u2019s fetched from the database (via ",(0,r.kt)("inlineCode",{parentName:"p"},"em.find()"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"em.findOne()")," or via other managed entity)\nor registered as new through ",(0,r.kt)("inlineCode",{parentName:"p"},"em.persist()"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"em.flush()")," will go through all managed entities, compute appropriate change sets and\nperform according database queries. As an entity loaded from database becomes managed\nautomatically, you do not have to call persist on those, and flush is enough to update\nthem."),(0,r.kt)("h2",{id:"persisting-and-cascading"},"Persisting and cascading"),(0,r.kt)("p",null,"To save entity state to database, you need to persist it. Persist determines\nwhether to use ",(0,r.kt)("inlineCode",{parentName:"p"},"insert")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"update")," and computes appropriate change-set. Entity references\nthat are not persisted yet (does not have identifier) will be cascade persisted automatically. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// use constructors in your entities for required parameters\nconst author = new Author('Jon Snow', 'snow@wall.st');\nauthor.born = new Date();\n\nconst publisher = new Publisher('7K publisher');\n\nconst book1 = new Book('My Life on The Wall, part 1', author);\nbook1.publisher = publisher;\nconst book2 = new Book('My Life on The Wall, part 2', author);\nbook2.publisher = publisher;\nconst book3 = new Book('My Life on The Wall, part 3', author);\nbook3.publisher = publisher;\n\n// just persist books, author and publisher will be automatically cascade persisted\nawait orm.em.persistAndFlush([book1, book2, book3]);\n\n// or one by one\norm.em.persistLater(book1);\norm.em.persistLater(book2);\norm.em.persistLater(book3); \nawait orm.em.flush(); // flush everything to database at once\n")),(0,r.kt)("h3",{id:"auto-flushing"},"Auto flushing"),(0,r.kt)("p",null,"By default, ",(0,r.kt)("inlineCode",{parentName:"p"},"EntityManager.persist()")," will ",(0,r.kt)("strong",{parentName:"p"},"flush your changes automatically"),". You can use\nits second parameter to disable auto-flushing, and use ",(0,r.kt)("inlineCode",{parentName:"p"},"EntityManager.flush()")," manually. "),(0,r.kt)("p",null,"You can also disable this feature globally via ",(0,r.kt)("inlineCode",{parentName:"p"},"autoFlush")," option when initializing the ORM:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const orm = await MikroORM.init({\n  autoFlush: false,\n  // ...\n});\nawait orm.em.persist(new Entity()); // no auto-flushing now\nawait orm.em.flush();\nawait orm.em.persist(new Entity(), true); // you can still use second parameter to auto-flush\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default value of ",(0,r.kt)("inlineCode",{parentName:"p"},"autoFlush")," is currently set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", which will change in upcoming major\nrelease. Users are encouraged to either set ",(0,r.kt)("inlineCode",{parentName:"p"},"autoFlush")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," or use ",(0,r.kt)("inlineCode",{parentName:"p"},"em.persistLater()"),"\n(equal to ",(0,r.kt)("inlineCode",{parentName:"p"},"em.persist(entity, false)"),") and ",(0,r.kt)("inlineCode",{parentName:"p"},"em.persistAndFlush()")," methods instead. ")),(0,r.kt)("h2",{id:"fetching-entities-with-entitymanager"},"Fetching entities with EntityManager"),(0,r.kt)("p",null,"To fetch entities from database you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"find()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"findOne()")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"EntityManager"),": "),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const author = await orm.em.findOne(Author, '...id...');\nconst books = await orm.em.find(Book, {});\n\nfor (const author of authors) {\n  console.log(author.name); // Jon Snow\n\n  for (const book of author.books) {\n    console.log(book.title); // initialized\n    console.log(book.author.isInitialized()); // true\n    console.log(book.author.id);\n    console.log(book.author.name); // Jon Snow\n    console.log(book.publisher); // just reference\n    console.log(book.publisher.isInitialized()); // false\n    console.log(book.publisher.id);\n    console.log(book.publisher.name); // undefined\n  }\n}\n")),(0,r.kt)("h3",{id:"fetching-partial-entities"},"Fetching partial entities"),(0,r.kt)("p",null,"When fetching single entity, you can choose to select only parts of an entity via ",(0,r.kt)("inlineCode",{parentName:"p"},"options.fields"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const author = await orm.em.findOne(Author, '...', { fields: ['name', 'born'] });\nconsole.log(author.id); // PK is always selected\nconsole.log(author.name); // Jon Snow\nconsole.log(author.email); // undefined\n")),(0,r.kt)("h2",{id:"type-of-fetched-entities"},"Type of fetched entities"),(0,r.kt)("p",null,"Both ",(0,r.kt)("inlineCode",{parentName:"p"},"EntityManager.find")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"EntityManager.findOne()")," methods have generic return types.\nAll of following examples are equal and will let typescript correctly infer the entity type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const author1 = await orm.em.findOne<Author>(Author.name, '...id...');\nconst author2 = await orm.em.findOne<Author>('Author', '...id...');\nconst author3 = await orm.em.findOne(Author, '...id...');\n")),(0,r.kt)("p",null,"As the last one is the least verbose, it should be preferred. "),(0,r.kt)("h2",{id:"entity-repositories"},"Entity repositories"),(0,r.kt)("p",null,"Although you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"EntityManager")," directly, much more convenient way is to use\n",(0,r.kt)("a",{parentName:"p",href:"https://mikro-orm.io/repositories/"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityRepository")," instead"),". You can register\nyour repositories in dependency injection container like ",(0,r.kt)("a",{parentName:"p",href:"http://inversify.io/"},"InversifyJS"),"\nso you do not need to get them from ",(0,r.kt)("inlineCode",{parentName:"p"},"EntityManager")," each time."),(0,r.kt)("p",null,"For more examples, take a look at\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/master/tests/EntityManager.mongo.test.ts"},(0,r.kt)("inlineCode",{parentName:"a"},"tests/EntityManager.mongo.test.ts")),"\nor ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/master/tests/EntityManager.mysql.test.ts"},(0,r.kt)("inlineCode",{parentName:"a"},"tests/EntityManager.mysql.test.ts")),"."),(0,r.kt)("h2",{id:"entitymanager-api"},"EntityManager API"),(0,r.kt)("h4",{id:"getrepositoryt-extends-ientityentityname-string--entityclasst-entityrepositoryt"},(0,r.kt)("inlineCode",{parentName:"h4"},"getRepository<T extends IEntity>(entityName: string | EntityClass<T>): EntityRepository<T>")),(0,r.kt)("p",null,"Returns ",(0,r.kt)("inlineCode",{parentName:"p"},"EntityRepository")," for given entity, respects ",(0,r.kt)("inlineCode",{parentName:"p"},"customRepository")," option of ",(0,r.kt)("inlineCode",{parentName:"p"},"@Entity"),"\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"entityRepository")," option of ",(0,r.kt)("inlineCode",{parentName:"p"},"MikroORM.init()"),"."),(0,r.kt)("h4",{id:"findt-extends-ientityentityname-string--entityclasst-where-filterqueryt-options-findoptions-promiset"},(0,r.kt)("inlineCode",{parentName:"h4"},"find<T extends IEntity>(entityName: string | EntityClass<T>, where?: FilterQuery<T>, options?: FindOptions): Promise<T[]>")),(0,r.kt)("p",null,"Returns array of entities found for given condition. You can specify ",(0,r.kt)("inlineCode",{parentName:"p"},"FindOptions")," to request\npopulation of referenced entities or control the pagination:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface FindOptions {\n  populate?: string[];\n  orderBy?: { [k: string]: QueryOrder };\n  limit?: number;\n  offset?: number;\n}\n")),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"findt-extends-ientityentityname-string--entityclasst-where-filterqueryt-populate-string-orderby--k-string-queryorder--limit-number-offset-number-promiset"},(0,r.kt)("inlineCode",{parentName:"h4"},"find<T extends IEntity>(entityName: string | EntityClass<T>, where?: FilterQuery<T>, populate?: string[], orderBy?: { [k: string]: QueryOrder }, limit?: number, offset?: number): Promise<T[]>")),(0,r.kt)("p",null,"Same as previous ",(0,r.kt)("inlineCode",{parentName:"p"},"find")," method, just with dedicated parameters for ",(0,r.kt)("inlineCode",{parentName:"p"},"populate"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"orderBy"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"limit"),"\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"offset"),"."),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"findonet-extends-ientityentityname-string--entityclasst-where-filterqueryt--string-populate-string-promiset--null"},(0,r.kt)("inlineCode",{parentName:"h4"},"findOne<T extends IEntity>(entityName: string | EntityClass<T>, where: FilterQuery<T> | string, populate?: string[]): Promise<T | null>")),(0,r.kt)("p",null,"Finds an entity by given ",(0,r.kt)("inlineCode",{parentName:"p"},"where")," condition. You can use primary key as ",(0,r.kt)("inlineCode",{parentName:"p"},"where")," value, then\nif the entity is already managed, no database call will be made. "),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"merget-extends-ientityentityname-string--entityclasst-data-entitydatat-t"},(0,r.kt)("inlineCode",{parentName:"h4"},"merge<T extends IEntity>(entityName: string | EntityClass<T>, data: EntityData<T>): T")),(0,r.kt)("p",null,"Adds given entity to current Identity Map. After merging, entity becomes managed.\nThis is useful when you want to work with cached entities. "),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"mapt-extends-ientityentityname-string--entityclasst-data-entitydatat-t"},(0,r.kt)("inlineCode",{parentName:"h4"},"map<T extends IEntity>(entityName: string | EntityClass<T>, data: EntityData<T>): T")),(0,r.kt)("p",null,"Maps raw DB result to entity, adding it to current Identity Map. Equivalent to\n",(0,r.kt)("inlineCode",{parentName:"p"},"IDatabaseDriver.mapResult()")," followed by ",(0,r.kt)("inlineCode",{parentName:"p"},"EntityManager.merge()"),"."),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"getreferencet-extends-ientityentityname-string--entityclasst-id-string-t"},(0,r.kt)("inlineCode",{parentName:"h4"},"getReference<T extends IEntity>(entityName: string | EntityClass<T>, id: string): T")),(0,r.kt)("p",null,"Gets a reference to the entity identified by the given type and identifier without actually\nloading it, if the entity is not yet loaded."),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"countentityname-string--entityclasst-where-any-promisenumber"},(0,r.kt)("inlineCode",{parentName:"h4"},"count(entityName: string | EntityClass<T>, where: any): Promise<number>")),(0,r.kt)("p",null,"Gets count of entities matching the ",(0,r.kt)("inlineCode",{parentName:"p"},"where")," condition. "),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"persistentity-ientity--ientity-flush-boolean-promisevoid"},(0,r.kt)("inlineCode",{parentName:"h4"},"persist(entity: IEntity | IEntity[], flush?: boolean): Promise<void>")),(0,r.kt)("p",null,"Tells the EntityManager to make an instance managed and persistent. The entity will be\nentered into the database at or before transaction commit or as a result of the flush\noperation. You can control immediate flushing via ",(0,r.kt)("inlineCode",{parentName:"p"},"flush")," parameter and via ",(0,r.kt)("inlineCode",{parentName:"p"},"autoFlush"),"\nconfiguration option. "),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"persistandflushentity-ientity--ientity-promisevoid"},(0,r.kt)("inlineCode",{parentName:"h4"},"persistAndFlush(entity: IEntity | IEntity[]): Promise<void>")),(0,r.kt)("p",null,"Shortcut for ",(0,r.kt)("inlineCode",{parentName:"p"},"persist")," & ",(0,r.kt)("inlineCode",{parentName:"p"},"flush"),"."),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"persistlaterentity-ientity--ientity-void"},(0,r.kt)("inlineCode",{parentName:"h4"},"persistLater(entity: IEntity | IEntity[]): void")),(0,r.kt)("p",null,"Shortcut for just ",(0,r.kt)("inlineCode",{parentName:"p"},"persist"),", without flushing. "),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"flush-promisevoid"},(0,r.kt)("inlineCode",{parentName:"h4"},"flush(): Promise<void>")),(0,r.kt)("p",null,"Flushes all changes to objects that have been queued up to now to the database."),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"removeentityname-string--entityclasst-where-ientity--any-flush-boolean-promisenumber"},(0,r.kt)("inlineCode",{parentName:"h4"},"remove(entityName: string | EntityClass<T>, where: IEntity | any, flush?: boolean): Promise<number>")),(0,r.kt)("p",null,"When provided entity instance as ",(0,r.kt)("inlineCode",{parentName:"p"},"where")," value, then it calls ",(0,r.kt)("inlineCode",{parentName:"p"},"removeEntity(entity, flush)"),",\notherwise it fires delete query with given ",(0,r.kt)("inlineCode",{parentName:"p"},"where")," condition. "),(0,r.kt)("p",null,"This method fires ",(0,r.kt)("inlineCode",{parentName:"p"},"beforeDelete")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"afterDelete")," hooks only if you provide entity instance.  "),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"removeentityentity-ientity-flush-boolean-promisenumber"},(0,r.kt)("inlineCode",{parentName:"h4"},"removeEntity(entity: IEntity, flush?: boolean): Promise<number>")),(0,r.kt)("p",null,"Removes an entity instance. A removed entity will be removed from the database at or before\ntransaction commit or as a result of the flush operation. You can control immediate flushing\nvia ",(0,r.kt)("inlineCode",{parentName:"p"},"flush")," parameter and via ",(0,r.kt)("inlineCode",{parentName:"p"},"autoFlush")," configuration option."),(0,r.kt)("p",null,"This method fires ",(0,r.kt)("inlineCode",{parentName:"p"},"beforeDelete")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"afterDelete")," hooks.  "),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"removeandflushentity-ientity-promisevoid"},(0,r.kt)("inlineCode",{parentName:"h4"},"removeAndFlush(entity: IEntity): Promise<void>")),(0,r.kt)("p",null,"Shortcut for ",(0,r.kt)("inlineCode",{parentName:"p"},"removeEntity")," & ",(0,r.kt)("inlineCode",{parentName:"p"},"flush"),"."),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"removelaterentity-ientity-void"},(0,r.kt)("inlineCode",{parentName:"h4"},"removeLater(entity: IEntity): void")),(0,r.kt)("p",null,"Shortcut for ",(0,r.kt)("inlineCode",{parentName:"p"},"removeEntity")," without flushing. "),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"clear-void"},(0,r.kt)("inlineCode",{parentName:"h4"},"clear(): void")),(0,r.kt)("p",null,"Clears the EntityManager. All entities that are currently managed by this EntityManager\nbecome detached."),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"canpopulateentityname-string--entityclasst-property-string-boolean"},(0,r.kt)("inlineCode",{parentName:"h4"},"canPopulate(entityName: string | EntityClass<T>, property: string): boolean")),(0,r.kt)("p",null,"Returns whether given entity has given property which can be populated (is reference or\ncollection)."),(0,r.kt)("hr",null))}y.isMDXComponent=!0}}]);