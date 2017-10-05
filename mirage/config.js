export default function() {
 this.get('/composers', (schema) => {
   return schema.composers.all();
 });

 // this.get('/composers/:id');

 // this.get('/tabs', (schema) => {
 //   return schema.tabs.all();
 // });

 // this.get('/tabs/:id');

 this.passthrough('http://www.classtab.org/**');
 this.passthrough('/tabs/**');
 this.passthrough();
}
