<template>
<FlexboxLayout flexDirection="row" class="single_row">
	<!-- <Button text="<<" @tap="onButtonTap" 
		@mouseleave="clearButtonHeld"
		@mouseup="clearButtonHeld"/>
	<Button text="<" @tap="onButtonTap" /> -->
	<Label :text="joint.name" />
	<!-- <Slider value="80" class="t-12"
		style="width: 60%" />
	<Button text=">" @tap="onButtonTap" />
	<Button text=">>" @tap="onButtonTap" /> -->
</FlexboxLayout>
</template>

<script>
// import icon1 from './../assets/icons/fast_forward-24px.svg'
	// import WsClient from './../helpers/wsclient'
	export default {
		methods: {
			onButtonTap () {
				this.moveJoint()
				console.log("Button was pressed")
			}
		},
		data() {
			return {
				currentComponent: null,
				runningInterval: null,
				buttonHeldInterval: false
			}
		},
		mounted () {
			// this.connection = new WsClient.greet('to soon')
		},
	};
</script>

<style scoped>
	.home-panel {
		vertical-align: center;
		font-size: 20;
		margin: 15;
	}


</style>