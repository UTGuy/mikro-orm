"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3326],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(t),m=a,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(h,i(i({ref:n},u),{},{components:t})):r.createElement(h,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},74708:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=t(83117),a=t(80102),o=(t(67294),t(3905)),i=["components"],c={title:"Result cache"},s=void 0,l={unversionedId:"caching",id:"version-5.1/caching",title:"Result cache",description:"MikroORM has simple result caching mechanism. It works with those methods of",source:"@site/versioned_docs/version-5.1/caching.md",sourceDirName:".",slug:"/caching",permalink:"/docs/caching",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-5.1/caching.md",tags:[],version:"5.1",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1649854732,formattedLastUpdatedAt:"4/13/2022",frontMatter:{title:"Result cache"},sidebar:"docs",previous:{title:"Using Query Builder",permalink:"/docs/query-builder"},next:{title:"Logging",permalink:"/docs/logging"}},u={},p=[],d={toc:p};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"MikroORM has simple result caching mechanism. It works with those methods of\n",(0,o.kt)("inlineCode",{parentName:"p"},"EntityManager"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"find()"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"findOne()"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"findAndCount()"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"findOneOrFail()"),",\n",(0,o.kt)("inlineCode",{parentName:"p"},"count()"),", as well as with ",(0,o.kt)("inlineCode",{parentName:"p"},"QueryBuilder")," result methods (including ",(0,o.kt)("inlineCode",{parentName:"p"},"execute"),")."),(0,o.kt)("p",null,"By default, in memory cache is used, that is shared for the whole ",(0,o.kt)("inlineCode",{parentName:"p"},"MikroORM"),"\ninstance. Default expiration is 1 second."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const res = await em.find(Book, { author: { name: 'Jon Snow' } }, {\n  populate: ['author', 'tags'],\n  cache: 50, // set expiration to 50ms\n  // cache: ['cache-key', 50], // set custom cache key and expiration\n  // cache: true, // use default cache key and expiration\n});\n")),(0,o.kt)("p",null,"Or with query builder:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const res = await em.createQueryBuilder(Book)\n  .where({ author: { name: 'Jon Snow' } })\n  .cache()\n  .getResultList();\n")),(0,o.kt)("p",null,"We can change the default expiration as well as provide custom cache adapter in\nthe ORM configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const orm = await MikroORM.init({\n  resultCache: {\n    // following options are the defaults\n    adapter: MemoryCacheAdapter,\n    expiration: 1000, // 1s\n    options: {},\n  },\n  // ...\n});\n")),(0,o.kt)("p",null,"To clear the cached result, we need to load it with explicit cache key, and later\non we can use ",(0,o.kt)("inlineCode",{parentName:"p"},"em.clearCache(cacheKey)")," method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// set the cache key to 'book-cache-key', with experiation of 60s\nconst res = await em.find(Book, { ... }, { cache: ['book-cache-key', 60_000] });\n\n// clear the cache key by name\nawait em.clearCache('book-cache-key');\n")),(0,o.kt)("p",null,"Custom cache adapters need to implement ",(0,o.kt)("inlineCode",{parentName:"p"},"CacheAdapter")," interface."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export interface CacheAdapter {\n\n  /**\n   * Gets the items under `name` key from the cache.\n   */\n  get(name: string): Promise<any>;\n\n  /**\n   * Sets the item to the cache. `origin` is used for cache invalidation and should reflect the change in data.\n   */\n  set(name: string, data: any, origin: string, expiration?: number): Promise<void>;\n\n  /**\n   * Removes the item from cache.\n   */\n  remove(name: string): Promise<void>;\n\n  /**\n   * Clears all items stored in the cache.\n   */\n  clear(): Promise<void>;\n\n  /**\n   * Called inside `MikroORM.close()` Allows graceful shutdowns (e.g. for redis).\n   */\n  close?(): Promise<void>;\n\n}\n")))}m.isMDXComponent=!0}}]);