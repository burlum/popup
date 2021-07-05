<template>
  <div id="MainButton">
    <button type="button" class="btn btn-outline-light"
    @click="$router.push({name:'MainForm'})">Начало работы</button>
  </div>
</template>

<script>
export default {
    name: "Button",
}
</script>


<style>
body{
  background: linear-gradient(90deg, #fd5852, #e03534);
}
#MainButton{
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn{
    align-items: center;
    padding: 16px 32px;
    width: 198px;
    height: 56px;
    left: 621px;
    top: 372px;
    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    filter: drop-shadow(0px 0px 44px #CFDAE7);
    border-radius: 6px;
    margin-top:45vh;
}
</style>