<template>
<FlexboxLayout flexDirection="row" class="single_row">
	<!-- <Button text="<<" @tap="onButtonTap" 
		@mouseleave="clearButtonHeld"
		@mouseup="clearButtonHeld"/>
	<Button text="<" @tap="onButtonTap" /> -->
	<Label :text="joint.name" />
	<GridLayout class="bg-primary p-15 m-15" width="200" height="200" longPress="onLongPress">
	</GridLayout>
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
			},
			onItemTap (args) {
				console.log("Item with index: " + args.index + " tapped")
			},
			clearButtonHeld () {
				console.log("TCL: clearButtonHeld -> btn off")
			},
			moveJoint () {
				this.runningInterval = true
				if (this.buttonHeldInterval === false) {
					this.buttonHeldInterval = setInterval(this.displayText('TwojaStaraSkrypt'), 50)
				}
			},
			onLongPress () {
				
			},
			stopJoint() {
				this.buttonHeldInterval = false
			},
			displayText (val) {
				console.log("TCL: displayText -> val", val)
			}
		},
		computed: {
			navigationButtonClasses() {
				return component => ({
					fa: true,
					"nav-btn": true,
					purple: component === this.currentComponent
				});
			}
		},

		data() {
			return {
				joints: [{
						name: "Joint 1"
					},
					{
						name: "Joint 2"
					},
					{
						name: "Joint 3"
					},
					{
						name: "Joint 4"
					},
					{
						name: "Joint 5"
					},
					{
						name: "Joint 6"
					},
					{
						name: "Joint 7"
					}
				],
				currentComponent: null,
				runningInterval: null,
				buttonHeldInterval: false
			};
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

	.description-label {
		margin-bottom: 15;
	}

	.single_row button {
		margin: 0;
		padding: 0;
	}

	.nav-btn {
		color: #9D95B4;
		margin: 20;
		font-size: 30;
		padding: 10;
	}
	.bg-primary { 
		background-color: brown;
	}

</style>