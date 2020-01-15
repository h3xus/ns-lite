<template>
	<StackLayout class="home-panel">
		<!--Add your page content here-->
			<FlexboxLayout flexDirection="row" class="single_row">
				<component v-for="component in componentsArray" 
					v-show="component === currentComponent"
					:is="component" row="1" col="0" colSpan="3" />
			</FlexboxLayout>

			<Button :class="navigationButtonClasses('JointRemote')" @tap="currentComponent = 'JointRemote'" :text="'fa-square' | fonticon" row="2" col="0" />
			<Button :class="navigationButtonClasses('ArrowsRemote')" @tap="currentComponent = 'ArrowsRemote'" :text="'fa-bars' | fonticon" row="2" col="1" />
			<Button :class="navigationButtonClasses('Card2')" @tap="currentComponent = 'Card2'" :text="'fa-clone' | fonticon" row="2" col="2" />
	</StackLayout>
</template>

<script>
import JointRemote from "./Remotes/JointRemote";
import ArrowsRemote from "./Remotes/ArrowsRemote";
import Card2 from "./Remotes/JointRemote";


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
		components: {
			JointRemote,
			ArrowsRemote,
			Card2
		},
		data () {
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
				currentComponent: "JointRemote",
				componentsArray: ["JointRemote", "Card1", "Card2"],
				runningInterval: null,
				buttonHeldInterval: false
			}
		},
		mounted () {
			// this.connection = new WsClient.greet('to soon')
		}
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

</style>