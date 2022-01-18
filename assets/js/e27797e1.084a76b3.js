"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[21541],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,y=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?i.createElement(y,a(a({ref:t},d),{},{components:n})):i.createElement(y,a({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1180:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var i=n(83117),r=n(80102),o=(n(67294),n(3905)),a=["components"],l={title:"Usage with MongoDB"},s=void 0,p={unversionedId:"usage-with-mongo",id:"version-3.6/usage-with-mongo",title:"Usage with MongoDB",description:"To use mikro-orm with mongo database, do not forget to install mongodb dependency. As MongoDriver",source:"@site/versioned_docs/version-3.6/usage-with-mongo.md",sourceDirName:".",slug:"/usage-with-mongo",permalink:"/docs/3.6/usage-with-mongo",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-3.6/usage-with-mongo.md",tags:[],version:"3.6",lastUpdatedBy:"Jens Mikkelsen",lastUpdatedAt:1642541168,formattedLastUpdatedAt:"1/18/2022",frontMatter:{title:"Usage with MongoDB"},sidebar:"version-3.6/docs",previous:{title:"Usage with SQL Drivers",permalink:"/docs/3.6/usage-with-sql"},next:{title:"Usage with NestJS",permalink:"/docs/3.6/usage-with-nestjs"}},d=[{value:"Defining entity",id:"defining-entity",children:[],level:2},{value:"ObjectId and string id duality",id:"objectid-and-string-id-duality",children:[],level:2},{value:"ManyToMany collections with inlined pivot array",id:"manytomany-collections-with-inlined-pivot-array",children:[],level:2},{value:"Transactions",id:"transactions",children:[],level:2},{value:"Indexes",id:"indexes",children:[],level:2},{value:"Native collection methods",id:"native-collection-methods",children:[],level:2}],c={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To use ",(0,o.kt)("inlineCode",{parentName:"p"},"mikro-orm")," with mongo database, do not forget to install ",(0,o.kt)("inlineCode",{parentName:"p"},"mongodb")," dependency. As ",(0,o.kt)("inlineCode",{parentName:"p"},"MongoDriver"),"\nis the default one, you do not need to provide it."),(0,o.kt)("p",null,"Then call ",(0,o.kt)("inlineCode",{parentName:"p"},"MikroORM.init")," as part of bootstrapping your app:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const orm = await MikroORM.init({\n  entitiesDirs: ['entities'], // relative to `baseDir`\n  dbName: 'my-db-name',\n  clientUrl: '...',\n  type: 'mongo',\n});\n")),(0,o.kt)("h2",{id:"defining-entity"},"Defining entity"),(0,o.kt)("p",null,"When defining entity, do not forget to define primary key like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"@PrimaryKey()\n_id: ObjectId;\n\n@SerializedPrimaryKey()\nid!: string; // won't be saved in the database\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Only ",(0,o.kt)("inlineCode",{parentName:"p"},"_id: ObjectId")," will be saved in the database. ",(0,o.kt)("inlineCode",{parentName:"p"},"id: string")," is virtual and is\nalso optional. ")),(0,o.kt)("h2",{id:"objectid-and-string-id-duality"},"ObjectId and string id duality"),(0,o.kt)("p",null,"Every entity has both ",(0,o.kt)("inlineCode",{parentName:"p"},"ObjectId")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," id available, also all methods of ",(0,o.kt)("inlineCode",{parentName:"p"},"EntityManager"),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"EntityRepository")," supports querying by both of them. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const author = orm.em.getReference('...id...');\nconsole.log(author.id);  // returns '...id...'\nconsole.log(author._id); // returns ObjectId('...id...')\n\n// all of those will return the same results\nconst article = '...article id...'; // string id\nconst book = '...book id...'; // string id\nconst repo = orm.em.getRepository(Author);\nconst foo1 = await repo.find({ id: { $in: [article] }, favouriteBook: book });\nconst bar1 = await repo.find({ id: { $in: [new ObjectId(article)] }, favouriteBook: new ObjectId(book) });\nconst foo2 = await repo.find({ _id: { $in: [article] }, favouriteBook: book });\nconst bar2 = await repo.find({ _id: { $in: [new ObjectId(article)] }, favouriteBook: new ObjectId(book) });\n")),(0,o.kt)("h2",{id:"manytomany-collections-with-inlined-pivot-array"},"ManyToMany collections with inlined pivot array"),(0,o.kt)("p",null,"As opposed to SQL drivers that use pivot tables, in mongo we can leverage available array type\nto store array of collection items (identifiers). This approach has two main benefits:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Collection is stored on owning side entity, so we know how many items are there even before\ninitializing the collection."),(0,o.kt)("li",{parentName:"ol"},"As there are no pivot tables, resulting database queries are much simpler.")),(0,o.kt)("h2",{id:"transactions"},"Transactions"),(0,o.kt)("p",null,"Starting with v3.4, MongoDB driver supports transactions. To use transactions, there\nare several things you need to respect:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"you need to use replica set (see ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/vkarpov15/run-rs"},"run-rs"),")"),(0,o.kt)("li",{parentName:"ul"},"implicit transactions are disabled by default",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"use ",(0,o.kt)("inlineCode",{parentName:"li"},"implicitTransactions: true")," to enable them globally"),(0,o.kt)("li",{parentName:"ul"},"or use explicit transaction demarcation via ",(0,o.kt)("inlineCode",{parentName:"li"},"em.transactional()")))),(0,o.kt)("li",{parentName:"ul"},"you need to explicitly create all collections before working with them",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"use ",(0,o.kt)("inlineCode",{parentName:"li"},"em.getDriver().createCollections()")," method to do so")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# first create replica set\n$ run-rs -v 4.2.3\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { MikroORM } from 'mikro-orm';\nimport { MongoDriver } from 'mikro-orm/dist/drivers/MongoDriver';\n\n// make sure to provide the MongoDriver type hint\nconst orm = await MikroORM.init<MongoDriver>({\n  entitiesDirs: ['entities'], // relative to `baseDir`\n  clientUrl: 'mongodb://localhost:27017,localhost:27018,localhost:27019/my-db-name?replicaSet=rs0',\n  type: 'mongo',\n  implicitTransactions: true, // defaults to false\n});\n\nawait orm.em.getDriver().createCollections();\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"createCollections")," method is present on the ",(0,o.kt)("inlineCode",{parentName:"p"},"MongoDriver")," class only. You need\nto have the entity manager correctly typed (as ",(0,o.kt)("inlineCode",{parentName:"p"},"EntityManager<MongoDriver>"),").")),(0,o.kt)("h2",{id:"indexes"},"Indexes"),(0,o.kt)("p",null,"Starting with v3.4, MongoDB driver supports indexes and unique constraints. You can\nuse ",(0,o.kt)("inlineCode",{parentName:"p"},"@Index()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"@Unique()")," as described in ",(0,o.kt)("a",{parentName:"p",href:"/docs/3.6/defining-entities#indexes"},"Defining Entities section"),".\nTo automatically create new indexes when initializing the ORM, you need to enable\n",(0,o.kt)("inlineCode",{parentName:"p"},"ensureIndexes")," option. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const orm = await MikroORM.init({\n  entitiesDirs: ['entities'], // relative to `baseDir`\n  dbName: 'my-db-name',\n  type: 'mongo',\n  ensureIndexes: true, // defaults to false\n});\n")),(0,o.kt)("p",null,"Alternatively you can call ",(0,o.kt)("inlineCode",{parentName:"p"},"ensureIndexes()")," method on the ",(0,o.kt)("inlineCode",{parentName:"p"},"MongoDriver"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"await orm.em.getDriver().ensureIndexes();\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You can pass additional index/unique options via ",(0,o.kt)("inlineCode",{parentName:"p"},"options")," parameter:"),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"@Unique({ options: { partialFilterExpression: { name: { $exists: true } } }})"))),(0,o.kt)("h2",{id:"native-collection-methods"},"Native collection methods"),(0,o.kt)("p",null,"Sometimes you need to perform some bulk operation, or you just want to populate your\ndatabase with initial fixtures. Using ORM for such operations can bring unnecessary\nboilerplate code. In this case, you can use one of ",(0,o.kt)("inlineCode",{parentName:"p"},"nativeInsert/nativeUpdate/nativeDelete"),"\nmethods:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"em.nativeInsert<T extends AnyEntity>(entityName: string, data: any): Promise<IPrimaryKey>;\nem.nativeUpdate<T extends AnyEntity>(entityName: string, where: FilterQuery<T>, data: any): Promise<number>;\nem.nativeDelete<T extends AnyEntity>(entityName: string, where: FilterQuery<T> | any): Promise<number>;\n")),(0,o.kt)("p",null,"Those methods execute native driver methods like Mongo's ",(0,o.kt)("inlineCode",{parentName:"p"},"insertOne/updateMany/deleteMany")," collection methods respectively.\nThis is common interface for all drivers, so for MySQL driver, it will fire native SQL queries.\nKeep in mind that they do not hydrate results to entities, and they do not trigger lifecycle hooks. "),(0,o.kt)("p",null,"They are also available as ",(0,o.kt)("inlineCode",{parentName:"p"},"EntityRepository")," shortcuts:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"EntityRepository.nativeInsert(data: any): Promise<IPrimaryKey>;\nEntityRepository.nativeUpdate(where: FilterQuery<T>, data: any): Promise<number>;\nEntityRepository.nativeDelete(where: FilterQuery<T> | any): Promise<number>;\n")),(0,o.kt)("p",null,"There is also shortcut for calling ",(0,o.kt)("inlineCode",{parentName:"p"},"aggregate")," method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"em.aggregate(entityName: string, pipeline: any[]): Promise<any[]>;\nEntityRepository.aggregate(pipeline: any[]): Promise<any[]>;\n")))}u.isMDXComponent=!0}}]);