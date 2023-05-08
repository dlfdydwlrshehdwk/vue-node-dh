// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 뷰엑스 스토어 JS 불러오기
import store from './store.js'

/* 뷰인스턴스 생성하기 */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  store, // 스토어 사용 인스턴스 등록
  created(){
    // 스토어에 있는 initSet 메서드는 어떻게 호출하지?
    // 스토어 호출메서드가 따로있다.
    // store.commit('메서드명',파라미터값);
    // 1. 메서드명은 반드시 문자형으로 입력
    // 2. 파라미터는 단일값 또는 객체형식을 보낼 수 있음
    // 인스턴스 내부구역 코딩시 store에 $없음
    store.commit('initSet');
    
    // store.commit('initSet',
    // {   // 여러개의 데이터 보내기
    //     url:'https://img.freepik.com/premium-vector/city-illustration_23-2147514701.jpg',
    //     txt:'도시소개에 오신것을 환영합니다.'
    // })
    // 데이터 하나만 보내기
    // store.commit('initSet','https://img.freepik.com/premium-vector/city-illustration_23-2147514701.jpg')

    // actions 메서드 호출하기 : dispatch("메서드명",전달값)
    store.dispatch('myAct','나야나')
}, // created //
})
