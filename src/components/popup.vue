<template>
  <div id="MainForm">
    <div class="container">
        <div id="popupForm" >
            <div class="CloseForm"><i class='bi-x' @click="$router.push({name:'MainPage'})"></i></div>
            <h3>Налоговый вычет</h3>
            <p class="Info">
                Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер налогового вычета составляетне более 13% от своего официального годового дохода.
            </p>
            <div class="EnterInfo">
                <h6>Ваша зарплата в месяц</h6>
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Введите данные" aria-label="Введите данные">
                </div>
                <h6 @click="Calculate" class="Calculate">Рассчитать</h6>
            </div>
            <div class="CheckBoxDiv" v-if="Taxes[0]!=null">
                <h6>Итого иожете внести в качестве досрочных:</h6>
                <div class="CheckBoxInfo" v-for="(Tax, index) in Taxes" :key="Tax.key">
                    <div class="CustomCheckBox" @click="change(index)">
                        <i class='bi-check2'></i>
                    </div>

                    <p>{{Tax}} рублей <span>в {{index+1}} год</span></p>
                </div>
            </div>
            <div class="Choose">
                <h6>Что уменьшаем?</h6>
                <div class="PayDiv"><p>Платеж</p></div>
                <div class="TimeDiv"><p>Срок</p></div>
            </div>
            <div class="Accept">Добавить</div>
        </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
const MaxPrice = 260000;
export default {
    data:() =>({
        Taxes: new Array,
        MonthlySalary:0,
        YearlyTax:0,
        Counter:0,
    }),
    name: "Popup",
    methods:{
        Calculate:function(){
            this.MonthlySalary=$('input')[0].value;
            this.YearlyTax=this.MonthlySalary*12*0.13;
            if (this.YearlyTax!=0){
                this.Taxes=[];
            for(this.Counter = MaxPrice; this.YearlyTax <= this.Counter; this.Counter -=this.YearlyTax){
                this.Taxes.push(this.YearlyTax);
            }}
            this.Taxes.push(this.Counter);
        },
        change(a){
            if($(".CustomCheckBox")[a].style.background=="white"){
                $(".CustomCheckBox")[a].style.background="linear-gradient(90deg, #fd5852, #e03534)";
                $(".CustomCheckBox")[a].style.border="none";
            }
            else{
            $(".CustomCheckBox")[a].style.background="white";
            $(".CustomCheckBox")[a].style.border="1px solid gray";
            }
        }
    }
}
</script>


<style>
#MainForm{
    position:absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height:100%;
    background:#b3b3b3;
    opacity:0;
    animation: fadeInFromNone 1s;
    animation-fill-mode: both;
}
@keyframes fadeInFromNone {
    0% {
        display: none;
        opacity: 0;
    }

    1% {
        display: block;
        opacity: 0;
    }

    100% {
        display: block;
        opacity: 1;
    }
}
#popupForm{
    max-width:820px;
    height:auto;
    padding-bottom:2vh;
    margin:20vh auto;
    background:#FFFFFF;
    border-radius: 30px;
    margin-bottom:5vh;
}
.bi-x{
    font-size:4vh;
    color:#EA0029;
    margin-right:1vh;
}
.bi-x:hover{
    cursor:pointer;
}
.CloseForm{
    text-align: right;
}
h3{
    font-size:4vh;
    margin-top:-3vh;
    color:#000000;
    margin-left:32px;
}
h6{
    color:#000000;
    margin-bottom:1.5vh;
}
.EnterInfo,.Choose,.CheckBoxDiv{
    margin-left:32px;
    margin-top:4vh;
}
.Info{
    font-style: normal;
    font-weight: normal;
    color:#808080;
    margin-left:32px;
}
.input-group{
    width:70vh;
}
@media(max-width:1800px){
.input-group{
    width:50vh;
}
.Accept{
    max-width:40vh;
}
}
@media(max-width:990px){
.input-group{
    width:50vh;
}
.Accept{
    max-width:20vh;
}
}
@media(max-width:760px){
.input-group{
    width:30vh;
}
.Accept{
    width:40vh;
}
}
@media(max-width:420px){
.input-group{
    width:20vh;
}
.PayDiv,.TimeDiv{
    font-size:1.5vh;
}
#popupForm{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin-top:0;
    border-radius:0px;
}
.Accept{
    width:35vh;
}
}
.Calculate{
    color:#ef3f5e;
    margin-top:1vh;
    cursor:pointer;
}
.Calculate:hover{
    cursor:pointer;
    color:#F53A31;
}
.Choose{
    display:flex;
    height:3.5vh
}
.Choose>h6{
    line-height: 3.5vh;
    vertical-align: center;
}
.Choose>div{
    border-radius:50px;
    padding:0.5vh;
    width:8vh;
    margin-left:1vh;
    cursor:pointer;
    text-align: center;
}
.PayDiv{
    background: linear-gradient(90deg, #fd5852, #e03534);
    color:white;
    height:3.5vh;
    line-height:2.5vh;
}
.TimeDiv{
    background:#EEF0F2;
    color:#000000;
    height:3.5vh;
    line-height:2.5vh;
}
.Accept{
    background: linear-gradient(90deg, #fd5852, #e03534);
    max-width:75vh;
    margin: 0 auto;
    margin-top:5vh;
    color:white;
    height:6vh;
    text-align:center;
    line-height: 6vh;
    vertical-align: center;
    box-shadow: 0px 0px 24px rgba(234, 0, 41, 0.33);
    border-radius: 6px;
    cursor:pointer;
    font-weight: bolder;
    font-size:2vh
}
.CheckBoxDiv>h6{
    padding-bottom:1vh;
}
.CheckBoxInfo{
    display:flex;
    height:5vh;
    margin-bottom:2vh;
    border-bottom:1px solid #DFE3E6;
    margin-right:32px;
}
.CheckBoxInfo>p{
    margin-left:1vh;
    font-size:1.8vh;
    color:#000000;
}
.CheckBoxInfo>p>span{
    font-size:1.8vh;
    color:gray;
}
.CustomCheckBox{
    width:3vh;
    height:3vh;
    background:linear-gradient(90deg, #fd5852, #e03534);
    color:white;
    border-radius:6px;
    line-height: 3vh;
    vertical-align: center;
    cursor:pointer;
}
.CustomCheckBox>i{
    font-size:3vh;
}
</style>