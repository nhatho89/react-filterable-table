!function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){e.exports=r(1)},function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var a=r(2),o=r(3),i=r(38),s=[{name:"Steve",age:27,job:"Sandwich Eater"},{name:"Gary",age:35,job:"Falafeler"},{name:"Greg",age:24,job:"Jelly Bean Juggler"},{name:"Jeb",age:39,job:"Burrito Racer"},{name:"Jeff",age:48,job:"Hot Dog Wrangler"},{name:"Jackson",age:41,job:"Careful Bead Accelerator"},{name:"Emma",age:83,job:"Clever Beam Councillor"},{name:"Aiden",age:59,job:"Dead Bean Investigator"},{name:"Olivia",age:60,job:"Easy Bedroom Projector"},{name:"Lucas",age:65,job:"Famous Boot Actor"},{name:"Ava",age:40,job:"Gifted Bread Counsellor"},{name:"Liam",age:52,job:"Helpful Brick Investor"},{name:"Mia",age:33,job:"Important Brother Protector"},{name:"Noah",age:65,job:"Inexpensive Camp Administrator"},{name:"Isabella",age:76,job:"Cooing Chicken Decorator"},{name:"Ethan",age:26,job:"Deafening Children Legislator"},{name:"Riley",age:77,job:"Faint Crook Radiator"},{name:"Mason",age:42,job:"Hissing Deer Auditor"},{name:"Aria",age:27,job:"Loud Dock Dictator"},{name:"Caden",age:22,job:"Melodic Doctor Mediator"},{name:"Zoe",age:85,job:"Noisy Downtown Refrigerator"},{name:"Oliver",age:84,job:"Round Drum Calculator"},{name:"Charlotte",age:28,job:"Shallow Dust Director"},{name:"Elijah",age:46,job:"Skinny Eye Narrator"},{name:"Lily",age:47,job:"Square Family Sailor"},{name:"Grayson",age:19,job:"Jolly Butter Collector"},{name:"Layla",age:81,job:"Kind Cast Editor"},{name:"Jacob",age:27,job:"Lively Cave Navigator"},{name:"Amelia",age:31,job:"Nice Cent Spectator"},{name:"Michael",age:39,job:"Obedient Cherries Commentator"},{name:"Emily",age:64,job:"Bitter Cherry Educator"},{name:"Benjamin",age:36,job:"Delicious Cobweb Objector"},{name:"Madelyn",age:61,job:"Fresh Coil Supervisor"},{name:"Carter",age:68,job:"Greasy Cracker Competitor"},{name:"Aubrey",age:67,job:"Creepy Dinner Elevator"},{name:"James",age:70,job:"Crooked Eggnog Operator"},{name:"Adalyn",age:68,job:"Cuddly Elbow Surveyor"},{name:"Jayden",age:70,job:"Curly Face Conductor"}],l=[{name:"name",displayName:"Name",inputFilterable:!0,sortable:!0,render:i.name},{name:"age",displayName:"Age",inputFilterable:!0,exactFilterable:!0,sortable:!0,render:i.age},{name:"job",displayName:"Occupation",inputFilterable:!0,exactFilterable:!0,sortable:!0,render:i.job}];a.render(React.createElement("div",null,React.createElement(o,n({namespace:"People",initialSort:"name",data:s,fields:l,noRecordsMessage:"There are no people to display",noFilteredRecordsMessage:"No people match your filters!"},"fields",l))),document.getElementById("root"))},function(e,t){e.exports=ReactDOM},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(4),u=n(l),c=r(5),f=n(c),p=r(6),d=n(p),h=r(9),m=n(h),g=r(10),v=n(g),b=r(11),y=n(b),w=r(37),E=n(w),x=function(e){function t(e){a(this,t);var r=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={loading:!1,entries:r.props.data||[],sort:r.props.initialSort,sortDir:"boolean"!=typeof r.props.initialSortDir||r.props.initialSortDir,filter:"",exactFilters:[],serverError:!1,totalPages:1,visiblePages:5,page:0,pageSize:+localStorage.getItem(r.props.namespace+".PageSize")||10},r.loadData=r.loadData.bind(r),r.setData=r.setData.bind(r),r.updateFilter=r.updateFilter.bind(r),r.addExactFilter=r.addExactFilter.bind(r),r.updatePageSize=r.updatePageSize.bind(r),r.updatePage=r.updatePage.bind(r),r.filterInputChanged=r.filterInputChanged.bind(r),r.updateSort=r.updateSort.bind(r),r.removeExactFilter=r.removeExactFilter.bind(r),y.default.defaults.headers.common["X-Requested-With"]="XMLHttpRequest",r}return i(t,e),s(t,[{key:"componentDidMount",value:function(){this.loadData(),window.onkeydown=function(e){var t=["INPUT","SELECT"];191===e.which&&t.indexOf(document.activeElement.tagName)<0&&(e.preventDefault(),document.querySelector("input.filter-input").focus())}}},{key:"componentWillReceiveProps",value:function(e){e.hasOwnProperty("data")&&this.setData(e.data)}},{key:"loadData",value:function(e){var t=this;if(e&&e.preventDefault(),!Array.isArray(this.props.data)&&!this.props.dataEndpoint)throw"No data was passed in and no data endpoint was set.";this.setState({loading:!0}),Array.isArray(this.props.data)?this.setData(this.props.data):y.default.get(this.props.dataEndpoint).then(function(e){return e.data}).then(function(e){t.setData(e)}).catch(function(e){t.setState({serverError:!0,loading:!1}),console.log(e)})}},{key:"setData",value:function(e){this.props.onDataReceived&&this.props.onDataReceived(e),this.setState({entries:e,loading:!1,serverError:!1,page:0})}},{key:"updateFilter",value:function(e){this.setState({filter:e,page:0}),this.scrollIntoView()}},{key:"addExactFilter",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t;if(e){var n=this.state.exactFilters,a={value:e.toString(),fieldname:t,name:r},o=n.some(function(e){return e.fieldname===a.fieldname&&e.value===a.value});o||(n.push(a),this.setState({exactFilters:n,page:0}))}}},{key:"removeExactFilter",value:function(e){var t=this.state.exactFilters,r=t.indexOf(e);r>-1&&t.splice(r,1),this.setState({exactFilters:t,page:0}),this.scrollIntoView()}},{key:"updatePage",value:function(e){this.setState({page:e}),this.scrollIntoView()}},{key:"updatePageSize",value:function(e){var t=+e.target.value;this.setState({page:0,pageSize:t}),localStorage.setItem(this.props.namespace+".PageSize",t)}},{key:"filterInputChanged",value:function(e){this.updateFilter(e.target.value),this.setState({page:0})}},{key:"updateSort",value:function(e){var t=this.state.sortDir;t=e!==this.state.sort||!t,this.setState({sort:e,sortDir:t,page:0})}},{key:"scrollIntoView",value:function(){var e=document.querySelector("table.filterable-table thead");e&&!(0,E.default)(e)&&e.scrollIntoView()}},{key:"render",value:function(){var e=this.state.loading?u.default.createElement("div",{className:"well text-center"},"Loading..."):"",t=this.state.serverError?u.default.createElement("div",{className:"alert alert-danger text-center"},"Something went wrong! Check console for error message(s)."):"",r=this.state.serverError||this.state.loading||0!==this.state.entries.length?"":u.default.createElement("div",null,this.props.noRecordsMessage),n=(0,v.default)(this.state.entries,{filter:this.state.filter,exactFilters:this.state.exactFilters,sort:this.state.sort,sortDir:this.state.sortDir,stickySorting:this.props.stickySorting,fields:this.props.fields}),a=this.state.loading||0===this.state.entries.length?"":u.default.createElement(f.default,{records:n,fields:this.props.fields,filter:this.state.filter,filterExact:this.state.filterExact,addExactFilter:this.addExactFilter,updateSort:this.updateSort,sort:this.state.sort,sortDir:this.state.sortDir,page:this.state.page,pageSize:this.state.pageSize,noFilteredRecordsMessage:this.props.noFilteredRecordsMessage,className:this.props.tableClassName}),o=n&&n.length>0?Math.ceil(n.length/this.state.pageSize):0,i=this.state.loading||0===this.state.entries.length||this.props.pagersVisible===!1?"":u.default.createElement(m.default,{total:o,current:this.state.page,visiblePages:this.state.visiblePages,onPageChanged:this.updatePage,className:"pagination-sm pull-right"}),s=this.state.loading||0===this.state.entries.length||this.props.pagersVisible===!1?"":u.default.createElement(m.default,{total:o,current:this.state.page,visiblePages:this.state.visiblePages,onPageChanged:this.updatePage});return u.default.createElement("div",{className:"filterable-table-container"+(this.props.className?" "+this.props.className:"")},u.default.createElement(d.default,{loading:this.state.loading,updateFilter:this.updateFilter,updateSort:this.updateSort,filter:this.state.filter,exactFilters:this.state.exactFilters,removeExactFilter:this.removeExactFilter,pageSize:this.state.pageSize,updatePageSize:this.updatePageSize,pager:i,recordCount:n.length,recordCountName:this.props.recordCountName,recordCountNamePlural:this.props.recordCountNamePlural,upperHeaderChildren:this.props.upperHeaderChildren,lowerHeaderChildren:this.props.lowerHeaderChildren,visible:this.props.headerVisible,pagersVisible:this.props.pagersVisible}),u.default.createElement("div",{className:"report-table-container"},e,t,r,a,s))}}],[{key:"defaultProps",get:function(){return{noRecordsMessage:"There are no records to display",noFilteredRecordsMessage:"There are no records to display",stickySorting:!1,namespace:"react-filterable-table",tableClassName:"table table-condensed table-hover filterable-table"}}}]),t}(u.default.Component);e.exports=x},function(e,t){e.exports=React},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=r(4),c=n(u),f=function(e){function t(e){a(this,t);var r=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.headerSortClassName=r.headerSortClassName.bind(r),r}return i(t,e),l(t,[{key:"headerSortClassName",value:function(e){return e.sortable?this.props.sort===e.name||this.props.sort===e.sortFieldName?this.props.sortDir?"fa fa-sort-asc":"fa fa-sort-desc":"fa fa-sort":null}},{key:"render",value:function(){var e=this,t=this.props,r=t.addExactFilter,n=t.updateSort,a=t.page,o=t.pageSize,i=(t.visible,a*o),l=i+o,u=this.props.records.slice(i,l),f=this.props.fields.filter(function(e){return e.visible!==!1}),p=f.map(function(t,r){var a=void 0!==t.displayName?t.displayName:t.name;return c.default.createElement("th",{onClick:t.sortable?function(){return n(t.sortFieldName||t.name)}:null,className:t.thClassName?t.thClassName:null,key:r},c.default.createElement("span",{className:t.sortable?"sortable":null},a),c.default.createElement("span",{className:e.headerSortClassName(t)}))}),d=u.map(function(t,n){var a=f.map(function(n,a){var o=void 0!==n.displayName?n.displayName:n.name,i=n.exactFilterable&&t[n.name]?"filterable ":"",l=t[n.name];if(n.render&&"function"==typeof n.render){var u=s({value:t[n.name],record:t,field:n},e.props);l=n.render(u)}var f=null===l||void 0===l||0===l.toString().length;return n.emptyDisplay&&f&&(l=n.emptyDisplay),f&&(i+="empty"),c.default.createElement("td",{className:n.tdClassName?n.tdClassName:null,key:a},c.default.createElement("span",{className:i,onClick:n.exactFilterable?function(){return r(t[n.name],n.name,o)}:null},l))});return c.default.createElement("tr",{key:n},a)}),h=f.map(function(e,t){return c.default.createElement("td",{key:t,className:e.tdClassName?e.tdClassName:null},e.footerValue||"")}),m=this.props.className;return m.indexOf("filterable-table")===-1&&(m+=" filterable-table"),0===d.length?c.default.createElement("div",null,this.props.noFilteredRecordsMessage||"There are no records to display."):c.default.createElement("div",null,c.default.createElement("table",{className:m},c.default.createElement("thead",null,c.default.createElement("tr",null,p)),c.default.createElement("tbody",null,d),c.default.createElement("tfoot",null,c.default.createElement("tr",null,h))))}}]),t}(c.default.Component);e.exports=f},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(4),u=n(l),c=r(7),f=n(c),p=function(e){function t(e){a(this,t);var r=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.filterChanged=r.filterChanged.bind(r),r}return i(t,e),s(t,[{key:"filterChanged",value:function(e){var t=e?e.target.value:"";0===t.length&&this.refs.filter.focus(),this.props.updateFilter(t)}},{key:"render",value:function(){var e=this;if(this.props.visible===!1)return u.default.createElement("div",null);var t=this.props,r=t.loading,n=t.recordCount,a=t.filter,o=(t.updateFilter,t.updatePageSize),i=u.default.createElement("span",null,n," ",1===n?this.props.recordCountName:this.props.recordCountNamePlural);return u.default.createElement("div",null,this.props.children,this.props.upperHeaderChildren,u.default.createElement("div",{className:"row header-row"},u.default.createElement("div",{className:"col-sm-3 filter-container"},u.default.createElement("span",{className:"filter-container"},u.default.createElement("input",{type:"text",className:"form-control filter-input",value:a,onChange:this.filterChanged,ref:"filter",placeholder:"Filter"}),u.default.createElement("span",{className:"close clear-filter",onClick:function(){return e.filterChanged("")}},"×"))),u.default.createElement("div",{className:"col-sm-5 col-sm-push-4"},u.default.createElement("select",{className:"form-control pull-sm-right pull-md-right pull-lg-right",onChange:o,value:this.props.pageSize},u.default.createElement("option",{value:"10"},"10 per page"),u.default.createElement("option",{value:"20"},"20 per page"),u.default.createElement("option",{value:"30"},"30 per page"),u.default.createElement("option",{value:"50"},"50 per page"))),u.default.createElement("div",{className:"col-sm-4 col-sm-pull-4 text-center text-muted record-count"},r||i)),this.props.lowerHeaderChildren,u.default.createElement("div",{className:"row header-row"},u.default.createElement("div",{className:"col-sm-8"},u.default.createElement(f.default,{exactFilters:this.props.exactFilters,removeExactFilter:this.props.removeExactFilter})),u.default.createElement("div",{className:"col-sm-4 hidden-xs"},this.props.pager)))}}],[{key:"defaultProps",get:function(){return{recordCountName:"record",recordCountNamePlural:"records"}}}]),t}(u.default.Component);e.exports=p},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(4),u=n(l),c=r(8),f=function(e){function t(e){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return i(t,e),s(t,[{key:"render",value:function(){var e=this.props,t=e.exactFilters,r=e.removeExactFilter,n=t.map(function(e,t){return u.default.createElement(c,{filter:e,removeFilter:r,key:t})});return u.default.createElement("div",{className:"exact-filters"},n)}}]),t}(u.default.Component);e.exports=f},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(4),u=n(l),c=function(e){function t(e){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return i(t,e),s(t,[{key:"render",value:function(){var e=this.props,t=e.filter,r=e.removeFilter;return u.default.createElement("span",{className:"filter-item"},u.default.createElement("span",{className:"filter-item-title"},u.default.createElement("span",{className:"filter-item-remove",onClick:function(){return r(t)}},u.default.createElement("span",{className:"fa fa-times"})),t.name),u.default.createElement("span",{className:"filter-item-value"},t.value))}}]),t}(u.default.Component);e.exports=c},function(e,t,r){!function(t,n){e.exports=n(r(4))}(this,function(e){return function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t){for(var r=[],n=e;n<t;n++)r.push(n);return r}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=r(1),c=n(u),f=0,p=1,d={first:"First",prev:"«",prevSet:"...",nextSet:"...",next:"»",last:"Last"},h=function(e){function t(e){a(this,t);var r=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.handleFirstPage=r.handleFirstPage.bind(r),r.handlePreviousPage=r.handlePreviousPage.bind(r),r.handleNextPage=r.handleNextPage.bind(r),r.handleLastPage=r.handleLastPage.bind(r),r.handleMorePrevPages=r.handleMorePrevPages.bind(r),r.handleMoreNextPages=r.handleMoreNextPages.bind(r),r.handlePageChanged=r.handlePageChanged.bind(r),r}return i(t,e),l(t,[{key:"getTitles",value:function(e){return this.props.titles[e]||d[e]}},{key:"calcBlocks",value:function(){var e=this.props,t=e.total,r=e.visiblePages,n=e.current+p,a=Math.ceil(t/r),o=Math.ceil(n/r)-p;return{total:a,current:o,size:r}}},{key:"isPrevDisabled",value:function(){return this.props.current<=f}},{key:"isNextDisabled",value:function(){return this.props.current>=this.props.total-p}},{key:"isPrevMoreHidden",value:function(){var e=this.calcBlocks();return e.total===p||e.current===f}},{key:"isNextMoreHidden",value:function(){var e=this.calcBlocks();return e.total===p||e.current===e.total-p}},{key:"visibleRange",value:function(){var e=this.calcBlocks(),t=e.current*e.size,r=this.props.total-t,n=t+(r>e.size?e.size:r);return[t+p,n+p]}},{key:"handleFirstPage",value:function(){this.isPrevDisabled()||this.handlePageChanged(f)}},{key:"handlePreviousPage",value:function(){this.isPrevDisabled()||this.handlePageChanged(this.props.current-p)}},{key:"handleNextPage",value:function(){this.isNextDisabled()||this.handlePageChanged(this.props.current+p)}},{key:"handleLastPage",value:function(){this.isNextDisabled()||this.handlePageChanged(this.props.total-p)}},{key:"handleMorePrevPages",value:function(){var e=this.calcBlocks();this.handlePageChanged(e.current*e.size-p)}},{key:"handleMoreNextPages",value:function(){var e=this.calcBlocks();this.handlePageChanged((e.current+p)*e.size)}},{key:"handlePageChanged",value:function(e){var t=this.props.onPageChanged;t&&t(e)}},{key:"renderPages",value:function(e){var t=this;return s(e[0],e[1]).map(function(e,r){var n=e-p,a=t.handlePageChanged.bind(t,n),o=t.props.current===n;return c.default.createElement(m,{key:r,index:r,isActive:o,className:"btn-numbered-page",onClick:a},e)})}},{key:"render",value:function(){var e=this.getTitles.bind(this),t="pagination";return this.props.className&&(t+=" "+this.props.className),c.default.createElement("nav",null,c.default.createElement("ul",{className:t},c.default.createElement(m,{className:"btn-first-page",key:"btn-first-page",isDisabled:this.isPrevDisabled(),onClick:this.handleFirstPage},e("first")),c.default.createElement(m,{className:"btn-prev-page",key:"btn-prev-page",isDisabled:this.isPrevDisabled(),onClick:this.handlePreviousPage},e("prev")),c.default.createElement(m,{className:"btn-prev-more",key:"btn-prev-more",isHidden:this.isPrevMoreHidden(),onClick:this.handleMorePrevPages},e("prevSet")),this.renderPages(this.visibleRange()),c.default.createElement(m,{className:"btn-next-more",key:"btn-next-more",isHidden:this.isNextMoreHidden(),onClick:this.handleMoreNextPages},e("nextSet")),c.default.createElement(m,{className:"btn-next-page",key:"btn-next-page",isDisabled:this.isNextDisabled(),onClick:this.handleNextPage},e("next")),c.default.createElement(m,{className:"btn-last-page",key:"btn-last-page",isDisabled:this.isNextDisabled(),onClick:this.handleLastPage},e("last"))))}}]),t}(c.default.Component);h.propTypes={current:c.default.PropTypes.number.isRequired,total:c.default.PropTypes.number.isRequired,visiblePages:c.default.PropTypes.number.isRequired,titles:c.default.PropTypes.object,onPageChanged:c.default.PropTypes.func},h.defaultProps={titles:d};var m=function(e){if(e.isHidden)return null;var t=e.className?e.className+" ":"",r=""+t+(e.isActive?" active":"")+(e.isDisabled?" disabled":"");return c.default.createElement("li",{key:e.index,className:r},c.default.createElement("a",{onClick:e.onClick},e.children))};m.propTypes={isHidden:c.default.PropTypes.bool,isActive:c.default.PropTypes.bool,isDisabled:c.default.PropTypes.bool,className:c.default.PropTypes.string,onClick:c.default.PropTypes.func},t.default=h},function(t,r){t.exports=e}])})},function(e,t){"use strict";function r(e,t){var r=t.filter,n=t.exactFilters,a=t.sort,o=t.sortDir,i=t.stickySorting,s=t.fields,l=s.filter(function(e){return e.inputFilterable}),u=r&&0!==r.length?e.filter(function(e){return l.some(function(t){var n=e[t.name]?e[t.name].toString():"";return n&&n.toLowerCase().indexOf(r.toLowerCase())>-1})}):e;return n.length>0&&(u=u.filter(function(e){return n.every(function(t){if(Array.isArray(e[t.fieldname]))return e[t.fieldname]&&e[t.fieldname].indexOf(t.value)>-1;var r=e[t.fieldname]?e[t.fieldname].toString().toLowerCase():"",n=t.value.toString().toLowerCase();return r===n})})),a&&a.length>0&&(u=u.sort(function(e,t){var r=e[a],n=t[a];if(i)if("string"==typeof e[a]||"string"==typeof t[a]){var s=o?"zzzzzzzzzzzz":"0";r=e[a]&&e[a].length>0?e[a].toLowerCase():s,n=t[a]&&t[a].length>0?t[a].toLowerCase():s}else if(e[a]&&"function"==typeof e[a].getMonth||t[a]&&"function"==typeof t[a].getMonth){var l=o?new Date("1/1/2999"):new Date("1/1/1000");r=e[a]||l,n=t[a]||l}else if("number"==typeof e[a]||"number"==typeof t[a]){var u=o?1/0:-(1/0);r=null!==e[a]&&void 0!==e[a]?e[a]:u,n=null!==t[a]&&void 0!==t[a]?t[a]:u}if(o){if(r<n)return-1;if(r>n)return 1}else{if(r>n)return-1;if(r<n)return 1}return 0})),u}e.exports=r},function(e,t,r){e.exports=r(12)},function(e,t,r){"use strict";function n(e){var t=new i(e),r=o(i.prototype.request,t);return a.extend(r,i.prototype,t),a.extend(r,t),r}var a=r(13),o=r(14),i=r(15),s=r(16),l=n(s);l.Axios=i,l.create=function(e){return n(a.merge(s,e))},l.Cancel=r(34),l.CancelToken=r(35),l.isCancel=r(31),l.all=function(e){return Promise.all(e)},l.spread=r(36),e.exports=l,e.exports.default=l},function(e,t,r){"use strict";function n(e){return"[object Array]"===C.call(e)}function a(e){return"[object ArrayBuffer]"===C.call(e)}function o(e){return"undefined"!=typeof FormData&&e instanceof FormData}function i(e){var t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function s(e){return"string"==typeof e}function l(e){return"number"==typeof e}function u(e){return"undefined"==typeof e}function c(e){return null!==e&&"object"==typeof e}function f(e){return"[object Date]"===C.call(e)}function p(e){return"[object File]"===C.call(e)}function d(e){return"[object Blob]"===C.call(e)}function h(e){return"[object Function]"===C.call(e)}function m(e){return c(e)&&h(e.pipe)}function g(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function v(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function b(){return"undefined"!=typeof window&&"undefined"!=typeof document&&"function"==typeof document.createElement}function y(e,t){if(null!==e&&"undefined"!=typeof e)if("object"==typeof e||n(e)||(e=[e]),n(e))for(var r=0,a=e.length;r<a;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}function w(){function e(e,r){"object"==typeof t[r]&&"object"==typeof e?t[r]=w(t[r],e):t[r]=e}for(var t={},r=0,n=arguments.length;r<n;r++)y(arguments[r],e);return t}function E(e,t,r){return y(t,function(t,n){r&&"function"==typeof t?e[n]=x(t,r):e[n]=t}),e}var x=r(14),C=Object.prototype.toString;e.exports={isArray:n,isArrayBuffer:a,isFormData:o,isArrayBufferView:i,isString:s,isNumber:l,isObject:c,isUndefined:u,isDate:f,isFile:p,isBlob:d,isFunction:h,isStream:m,isURLSearchParams:g,isStandardBrowserEnv:b,forEach:y,merge:w,extend:E,trim:v}},function(e,t){"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},function(e,t,r){"use strict";function n(e){this.defaults=e,this.interceptors={request:new i,response:new i}}var a=r(16),o=r(13),i=r(28),s=r(29),l=r(32),u=r(33);n.prototype.request=function(e){"string"==typeof e&&(e=o.merge({url:arguments[0]},arguments[1])),e=o.merge(a,this.defaults,{method:"get"},e),e.baseURL&&!l(e.url)&&(e.url=u(e.baseURL,e.url));var t=[s,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)r=r.then(t.shift(),t.shift());return r},o.forEach(["delete","get","head"],function(e){n.prototype[e]=function(t,r){return this.request(o.merge(r||{},{method:e,url:t}))}}),o.forEach(["post","put","patch"],function(e){n.prototype[e]=function(t,r,n){return this.request(o.merge(n||{},{method:e,url:t,data:r}))}}),e.exports=n},function(e,t,r){(function(t){"use strict";function n(e,t){!o.isUndefined(e)&&o.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function a(){var e;return"undefined"!=typeof XMLHttpRequest?e=r(19):"undefined"!=typeof t&&(e=r(19)),e}var o=r(13),i=r(18),s=/^\)\]\}',?\n/,l={"Content-Type":"application/x-www-form-urlencoded"},u={adapter:a(),transformRequest:[function(e,t){return i(t,"Content-Type"),o.isFormData(e)||o.isArrayBuffer(e)||o.isStream(e)||o.isFile(e)||o.isBlob(e)?e:o.isArrayBufferView(e)?e.buffer:o.isURLSearchParams(e)?(n(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):o.isObject(e)?(n(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e){e=e.replace(s,"");try{e=JSON.parse(e)}catch(e){}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};u.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],function(e){u.headers[e]={}}),o.forEach(["post","put","patch"],function(e){u.headers[e]=o.merge(l)}),e.exports=u}).call(t,r(17))},function(e,t){function r(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}function a(e){if(c===setTimeout)return setTimeout(e,0);if((c===r||!c)&&setTimeout)return c=setTimeout,setTimeout(e,0);try{return c(e,0)}catch(t){try{return c.call(null,e,0)}catch(t){return c.call(this,e,0)}}}function o(e){if(f===clearTimeout)return clearTimeout(e);if((f===n||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function i(){m&&d&&(m=!1,d.length?h=d.concat(h):g=-1,h.length&&s())}function s(){if(!m){var e=a(i);m=!0;for(var t=h.length;t;){for(d=h,h=[];++g<t;)d&&d[g].run();g=-1,t=h.length}d=null,m=!1,o(e)}}function l(e,t){this.fun=e,this.array=t}function u(){}var c,f,p=e.exports={};!function(){try{c="function"==typeof setTimeout?setTimeout:r}catch(e){c=r}try{f="function"==typeof clearTimeout?clearTimeout:n}catch(e){f=n}}();var d,h=[],m=!1,g=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];h.push(new l(e,t)),1!==h.length||m||a(s)},l.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=u,p.addListener=u,p.once=u,p.off=u,p.removeListener=u,p.removeAllListeners=u,p.emit=u,p.prependListener=u,p.prependOnceListener=u,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(e,t,r){"use strict";var n=r(13);e.exports=function(e,t){n.forEach(e,function(r,n){
n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])})}},function(e,t,r){"use strict";var n=r(13),a=r(20),o=r(23),i=r(24),s=r(25),l=r(21),u="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||r(26);e.exports=function(e){return new Promise(function(t,c){var f=e.data,p=e.headers;n.isFormData(f)&&delete p["Content-Type"];var d=new XMLHttpRequest,h="onreadystatechange",m=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in d||s(e.url)||(d=new window.XDomainRequest,h="onload",m=!0,d.onprogress=function(){},d.ontimeout=function(){}),e.auth){var g=e.auth.username||"",v=e.auth.password||"";p.Authorization="Basic "+u(g+":"+v)}if(d.open(e.method.toUpperCase(),o(e.url,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d[h]=function(){if(d&&(4===d.readyState||m)&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in d?i(d.getAllResponseHeaders()):null,n=e.responseType&&"text"!==e.responseType?d.response:d.responseText,o={data:n,status:1223===d.status?204:d.status,statusText:1223===d.status?"No Content":d.statusText,headers:r,config:e,request:d};a(t,c,o),d=null}},d.onerror=function(){c(l("Network Error",e)),d=null},d.ontimeout=function(){c(l("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED")),d=null},n.isStandardBrowserEnv()){var b=r(27),y=(e.withCredentials||s(e.url))&&e.xsrfCookieName?b.read(e.xsrfCookieName):void 0;y&&(p[e.xsrfHeaderName]=y)}if("setRequestHeader"in d&&n.forEach(p,function(e,t){"undefined"==typeof f&&"content-type"===t.toLowerCase()?delete p[t]:d.setRequestHeader(t,e)}),e.withCredentials&&(d.withCredentials=!0),e.responseType)try{d.responseType=e.responseType}catch(e){if("json"!==d.responseType)throw e}"function"==typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){d&&(d.abort(),c(e),d=null)}),void 0===f&&(f=null),d.send(f)})}},function(e,t,r){"use strict";var n=r(21);e.exports=function(e,t,r){var a=r.config.validateStatus;r.status&&a&&!a(r.status)?t(n("Request failed with status code "+r.status,r.config,null,r)):e(r)}},function(e,t,r){"use strict";var n=r(22);e.exports=function(e,t,r,a){var o=new Error(e);return n(o,t,r,a)}},function(e,t){"use strict";e.exports=function(e,t,r,n){return e.config=t,r&&(e.code=r),e.response=n,e}},function(e,t,r){"use strict";function n(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var a=r(13);e.exports=function(e,t,r){if(!t)return e;var o;if(r)o=r(t);else if(a.isURLSearchParams(t))o=t.toString();else{var i=[];a.forEach(t,function(e,t){null!==e&&"undefined"!=typeof e&&(a.isArray(e)&&(t+="[]"),a.isArray(e)||(e=[e]),a.forEach(e,function(e){a.isDate(e)?e=e.toISOString():a.isObject(e)&&(e=JSON.stringify(e)),i.push(n(t)+"="+n(e))}))}),o=i.join("&")}return o&&(e+=(e.indexOf("?")===-1?"?":"&")+o),e}},function(e,t,r){"use strict";var n=r(13);e.exports=function(e){var t,r,a,o={};return e?(n.forEach(e.split("\n"),function(e){a=e.indexOf(":"),t=n.trim(e.substr(0,a)).toLowerCase(),r=n.trim(e.substr(a+1)),t&&(o[t]=o[t]?o[t]+", "+r:r)}),o):o}},function(e,t,r){"use strict";var n=r(13);e.exports=n.isStandardBrowserEnv()?function(){function e(e){var t=e;return r&&(a.setAttribute("href",t),t=a.href),a.setAttribute("href",t),{href:a.href,protocol:a.protocol?a.protocol.replace(/:$/,""):"",host:a.host,search:a.search?a.search.replace(/^\?/,""):"",hash:a.hash?a.hash.replace(/^#/,""):"",hostname:a.hostname,port:a.port,pathname:"/"===a.pathname.charAt(0)?a.pathname:"/"+a.pathname}}var t,r=/(msie|trident)/i.test(navigator.userAgent),a=document.createElement("a");return t=e(window.location.href),function(r){var a=n.isString(r)?e(r):r;return a.protocol===t.protocol&&a.host===t.host}}():function(){return function(){return!0}}()},function(e,t){"use strict";function r(){this.message="String contains an invalid character"}function n(e){for(var t,n,o=String(e),i="",s=0,l=a;o.charAt(0|s)||(l="=",s%1);i+=l.charAt(63&t>>8-s%1*8)){if(n=o.charCodeAt(s+=.75),n>255)throw new r;t=t<<8|n}return i}var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.prototype=new Error,r.prototype.code=5,r.prototype.name="InvalidCharacterError",e.exports=n},function(e,t,r){"use strict";var n=r(13);e.exports=n.isStandardBrowserEnv()?function(){return{write:function(e,t,r,a,o,i){var s=[];s.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),n.isString(a)&&s.push("path="+a),n.isString(o)&&s.push("domain="+o),i===!0&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},function(e,t,r){"use strict";function n(){this.handlers=[]}var a=r(13);n.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},n.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},n.prototype.forEach=function(e){a.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=n},function(e,t,r){"use strict";function n(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var a=r(13),o=r(30),i=r(31),s=r(16);e.exports=function(e){n(e),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=a.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),a.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]});var t=e.adapter||s.adapter;return t(e).then(function(t){return n(e),t.data=o(t.data,t.headers,e.transformResponse),t},function(t){return i(t)||(n(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},function(e,t,r){"use strict";var n=r(13);e.exports=function(e,t,r){return n.forEach(r,function(r){e=r(e,t)}),e}},function(e,t){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t){"use strict";e.exports=function(e,t){return e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,"")}},function(e,t){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},function(e,t,r){"use strict";function n(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var r=this;e(function(e){r.reason||(r.reason=new a(e),t(r.reason))})}var a=r(34);n.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},n.source=function(){var e,t=new n(function(t){e=t});return{token:t,cancel:e}},e.exports=n},function(e,t){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t){"use strict";function r(e){if(void 0===e||null===e)return!1;"function"==typeof jQuery&&e instanceof jQuery&&(e=e[0]);var t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}e.exports=r},function(e,t){"use strict";e.exports={name:function(e){return e.value},age:function(e){var t="fa fa-"+(e.value>60?"blind":"motorcycle"),r=e.record.name;return React.createElement("span",{title:r+"'s Age"},e.value," ",React.createElement("span",{className:t}))},job:function(e){var t=e.record.name+"'s job is "+e.record.job+" and they're "+e.record.age+" year old.";return React.createElement("span",{title:t},e.value)}}}]);