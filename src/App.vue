<template>
    <div class="mold1">
		<h1>Tasks</h1>
        <select  v-model="chosen"> 
			    <option select value="">Choose a Task</option>
				<option v-for="(each, i) in options" :key="i">
				     {{ each }}
				</option>
        </select>
        <h2>Task: {{chosen}}</h2>
        <div v-if="chosen == 'greatest'">
            <Greatest />
		</div>
        <div v-else-if="chosen == 'least'">
            <Least />
		</div>
        <div v-else-if="chosen == 'gcd'">
            <GCD />
		</div>
        <div v-else-if="chosen == 'lcm'">
            <LCM />
		</div>
        <div v-else>
            Choose a task
		</div>
    </div>
</template>

<script>
import './App.css'
import Greatest from './components/Greatest.vue'
import Least from './components/Least.vue'
import GCD from './components/Gcd.vue'
import LCM from './components/Lcm.vue'

export default {
	components: {Greatest, Least, GCD, LCM},
	data() {
		return {
			operacoes: 'escolha uma operação',
			options: ['greatest', 'least', 'gcd', 'lcm'],
			chosen: ''
		}
	}
}
</script>

<style>
    .mold1 {
		background-color: lightblue;
		width: 450px;
		height: 600px;
		padding: 30px;
        margin-top: 50px;
		text-align: justify;
        display: inline-block;  
        border-radius: 20px;
		border: solid 1px purple;
	}

    select {
		width: 150px;
		height: 25px;
		outline: none;
		
	}

    option {
		text-align: center;
	}

	
</style>