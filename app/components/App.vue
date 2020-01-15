<template>
	<Page>
		<ActionBar title="IR"  android:flat="true"/>
		<TabView android:tabBackgroundColor="#ff6347"
				 android:tabTextColor="#c4ffdf"
				 android:selectedTabTextColor="#ffffff"
				 androidSelectedTabHighlightColor="#ffffff">
			<TabViewItem title="Run">
				<GridLayout columns="*" rows="*">
					<!-- <Label class="fa" text="{{'fa-bluetooth' | fonticon}}"></Label> -->
					<Label class="message" :text="msg" col="0" row="0"/>
				</GridLayout>
			</TabViewItem>
			<TabViewItem title="Recovery">
				<GridLayout columns="*" rows="*">
					<Remote/>
					<!-- <Label class="message" text="Tab 2 Content" col="0" row="0"/> -->
				</GridLayout>
			</TabViewItem>
			<TabViewItem title="Other">
				<GridLayout columns="*" rows="*">
					<Label class="message" text="Tab 3 Content" col="0" row="0"/>
				</GridLayout>
			</TabViewItem>
		</TabView>
	</Page>
</template>

<script lang="ts">
// import Initial from './Initial.vue'
import Remote from './Remote.vue'

  export default {
	components: {
		Remote
	},
	data() {
		return {
			msg: 'TwojaStaraSkrypt!'
		}
	}
  }
</script>

<style scoped>
	ActionBar {
		/* background-color: #53ba82; */
		background-color: #ff6347;
		color: #ffffff;
	}
	
	TabView {
		background-color: #fff;
	}

	.message {
		vertical-align: center;
		text-align: center;
		font-size: 20;
		color: #333333;
	}
</style>
