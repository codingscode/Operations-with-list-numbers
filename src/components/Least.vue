<template>
    <div>
        <h2>Least Element</h2>
        <input type="number" v-model="current_number">
        <button @click="add(parseFloat(current_number))">+</button>
        <div class="list">{{String(values)}}</div>
        <button class="buttoncalc" @click="calcleast(values)">calculate</button>
        <div class="cresult">
            Least Element:
            <div class="result">{{least}}</div>
        </div>
        <button class="clear" @click="clear()">Clear list</button>
    </div>
</template>

<script>
import calc_least from './theleast'

export default {
     data() {
         return {
             values: [],
             current_number: undefined,
             least: undefined
         }
     },
     methods: {
         add(value) {
             this.values.push(value)
             this.current_number = undefined
         },
         calcleast(list) {
             this.least = calc_least(list)
         },
         clear() {
             this.values = []
             this.least = null
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