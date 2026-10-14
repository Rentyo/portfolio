const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const html=fs.readFileSync('index.html','utf8'),scope={};vm.createContext(scope);vm.runInContext(fs.readFileSync('project-data.js','utf8')+';this.projects=projects;',scope);
assert.equal(Object.keys(scope.projects).length,4);
for(const [key,data] of Object.entries(scope.projects)){assert(data.title&&data.description&&data.members);assert(data.roles.length>0&&data.cases.length>0);for(const field of ['architecture','erd','hardware'])if(data[field])assert(fs.existsSync(data[field]),data[field]);assert(html.includes(`data-project="${key}"`));}
for(const match of html.matchAll(/(?:src|href)="([^"#]+)"/g)){const path=match[1];if(!/^(https?:|mailto:)/.test(path))assert(fs.existsSync(path),path);}
const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);assert.equal(ids.length,new Set(ids).size,'Duplicate element IDs');
assert(!html.includes('YOUR NAME'));assert(html.includes('id="image-viewer"'));assert(html.includes('tabindex="-1"'));
console.log('Verified: 4 projects, detail data, local assets, unique IDs, image viewer.');
