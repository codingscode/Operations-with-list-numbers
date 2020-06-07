<template>
    <div>
        <h2>Greatest Common Divisor</h2>
        <input type="number" v-model="current_number">
        <button @click="adding(parseFloat(current_number))"  >+</button>
        <div class="list">{{String(list)}}</div>

        <button class="buttoncalc" @click="calculategcd(list)">Calculate GCD</button>
        <div class="cresult">the gcd is : <div class="result">{{gcd}}</div></div>
        <button class="clear" @click="clear()">Clear list</button>
    </div>
</template>

<script>
import calc_gcd from './gcd'

export default {
    data() {
        return {
            list: [],
            current_number: undefined,
            gcd: undefined
        }
    },
    methods: {
        adding(value) {
           this.list.push(value)
           this.current_number = undefined
        },
        calculategcd() {
            this.gcd = calc_gcd(this.list)
        },
        clear() {
             this.list = ''
             this.gcd = null
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

    button {
        margin: 8px;
    }
</style>