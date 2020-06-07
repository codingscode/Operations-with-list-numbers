<template>
    <div>
       <h2>Least Common Multiple</h2>
       <input type="number" v-model="current_number">
       <button @click="add(parseFloat(current_number))" >+</button>
       <div class="list">{{String(list)}}</div>

       <button class="buttoncalc" @click="calculatelcm(list)">Calculate LCM</button>
       <div class="cresult">the lcm is :  <div class="result"> {{lcm}}</div></div>
       <button class="clear" @click="clear()">Clear list</button>
    </div>
</template>

<script>
import calc_lcm from './lcm'

export default {
    data() {
        return {
            list: [],
            current_number: undefined,
            lcm: undefined
        }
    },
    methods: {
        add(valor) {
           this.list.push(valor)
           this.current_number = undefined
        },
        calculatelcm() {
            this.lcm = calc_lcm(this.list)
        },
        clear() {
             this.list = ''
             this.lcm = null
        }
    }
}
</script>

<style>
    .list, .result {
        height: 20px;
        width: 180px;
        background-color: white;
        margin: 15px 0px;
        padding: 5px;
        border: solid 1px darkgreen;
    }

    .cresult {
        margin: 15px 0px;
    }

    .result {
        width: 70px;
        margin: 10px 0px;
    }

    .buttoncalc, .clear {
        background: gold;
        height: 40px;
        border-radius: 4px;
        border: solid 1px lightsalmon;
        margin: 0px;
        outline: none;
    }
 
    .buttoncalc:hover {
        background: darkorange;
        color: white;
    }

    button {
        margin: 8px;
    }
</style>