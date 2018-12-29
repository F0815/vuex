const state={
    num:1000
}
const getters={
    data(state){
        let data=new Date();
        let year =data.getFullYear().toString().padStart(4,'0'),
            month=(data.getMonth()+1).toString().padStart(2,'0'),
            day=data.getDate().toString().padStart(2,'0'),
            hour=data.getHours().toString().padStart(2,'0'),
            min=data.getMinutes().toString().padStart(2,'0'),
            sec=data.getSeconds().toString().padStart(2,'0') 
            return `${year}-${month}-${day} ${hour}:${min}:${sec}`;
    }
}
const mutations={
    changenum(state,{payload}){
        state.num = payload=='+'?state.num+1:state.num-1
    }
} 
export default{
    state,
    mutations,
    getters
}