Vue.component('greeting',{
template:`
    <div>
    <b>heeloo this is vue component</b>
    </div>
`
});
Vue.component('button-counter',{
    data:function(){
        return{
            count:0
        }
    },
    template:'<button v-on:click="count++">Click me {{count}} times</button>'
});

var app = new Vue({
    el: '#app',
    data: {
        show: false,
      message: 'Hello Vue!',
      int1: 1,
      int2: 2,
      result:null,
      parametes: 0,
      meters:0,
      textarea: '',
      radiobutton: '',
      select:[],
      checkbox:[],
      imgfile: 'assets/img/interior.jpg',
      link:'https://www.google.com',
      colorFont:'red',
      button:'',
      venicles: ['car','moto','bike']
    },
    computed:{
        sum: function(){
            return this.int1 + this.int2;
        }
    },
    methods:{
        sumProcess: function(int3){
            return this.result = this.int1 + this.int2 + int3;
        },
        alert:function(){
            alert('tara');
        },
        esckey:function(){
            alert('esckey');
        },
        spacekey:function(){
            alert('spacekey');
        },
        upkey:function(){
            alert('upkey');
        },
        downkey:function(){
            alert('downkey');
        },
        aKey:function(){
            alert('aKey');
        },
        remove:function(index){
            this.checkbox.splice(index,1);
    }, 

},
    watch:{
        parametes:function(val){
            this.parametes = val;
            this.meters = val * 1000;
        },
        meters: function(val){
            this.parametes = val / 1000;
            this.meters = val;

        }
    }
  })
  