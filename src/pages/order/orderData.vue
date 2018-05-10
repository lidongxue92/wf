<template>
	<div class="orderData">
		<ul class="orderData_title">
			<li>
				<span>营销商品(元)</span></br><label>32908.00</label>
			</li>
			<li>
				<span>用户消费(元)</span></br><label>32908.00</label>
			</li>
			<li>
				<span>复购率(%)</span></br><label>32908.00</label>
			</li>
		</ul>

		<div class="data_display">

		    <div class="yx_display">
		    	<p class="yx_display_title">营销商品数据额统计</p>
		    	<ul class="yx_display_tab">
			    	<li class="oli li_select">7日</li>
			    	<li class="oli">30日</li>
			    	<li class="oli">年度</li>
		    	</ul>
		      <p class="yx_display_ftitle">销售金额( 单位：元 )</p>
	          <div class="charts" >
		     	<div id="myChart" style="width:100%;height:100%;"></div>
			  </div>
		    </div>

		     <div class="yh_display">
		    	<p class="yh_display_title">用户消费数据统计</p>
		    	<ul class="yh_display_tab">
			    	<li class="oli li_select">7日</li>
			    	<li class="oli">30日</li>
			    	<li class="oli">年度</li>
		    	</ul>
		      <p class="yh_display_ftitle">销售金额( 单位：元 )</p>
	          <div class="yhcharts" >
		     	 <div id="yhChart" style="width:100%;height:215px;"></div>
			  </div>
		    </div>

		 </div>
	</div>
</template>
<script>
import { Swiper, SwiperItem,ButtonTab, ButtonTabItem, Divider } from 'vux'
export default {
  name:'orderData',
  components: {
  },
  data() {
    return {
    };
  },
  methods:{
  	//这是营销订单趋势图
	yx_display(){
		    let echarts = require('echarts/lib/echarts')
		    let chartBox=document.getElementsByClassName('charts')[0]
		    let myChart=document.getElementById('myChart')
		    function resizeCharts() {//为调整图标尺寸的方法
		        myChart.style.width=chartBox.style.width+'px'
		        myChart.style.height=chartBox.style.height+'px'
		    }
		     let mainChart = echarts.init(myChart)// 基于准备好的dom，初始化echarts实例
		     var option = null;
		     // 指定图表的配置项和数据
		     option = {
		     	title:{
			         text:'营销商品销售额',
			         textStyle:{
			            //文字颜色
			            color:'#ffffff',
			            //字体风格,'normal','italic','oblique'
			            fontStyle:'normal',
			            //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
			            fontWeight:'normal',
			            //字体系列
			            fontFamily:'sans-serif',
			            //字体大小
			    　　　　 fontSize:14,
			        }
			    },
			    xAxis: {
			        type: 'category',
			        data: ['1日', '2日', '3日', '4日', '5日', '6日', '7日'],
			        axisLine: {
                    lineStyle: {
                        type: 'solid',
                        color: '#fff',//左边线的颜色
                        width:'2'//坐标线的宽度
	                    }
	                },
	                axisLabel: {
	                    textStyle: {
	                        color: '#fff',//坐标值得具体的颜色
	                    }
	                },
	                axisTick:{
				        show:false/*隐藏刻度*/
				    }
			    },
			    yAxis: {
			        type: 'value',
			        axisLine: {
                    lineStyle: {
	                        type: 'solid',
	                        color: 'transparent',//左边线的颜色
	                        width:'2'//坐标线的宽度
	                    }
	                },
			    },
			    series: [{
                    type: 'line',
	                    itemStyle: {
	                        normal: {
	                            color: '#FFFFFF'/*线条颜色*/,
	                            label : {show: true}
	                        }
	                    },
	                    data: [80, 932, 91, 934, 190, 130, 1320],
	                }
            	]
			};

		     // 使用刚指定的配置项和数据显示图表。
		     if (option && typeof option === "object") {
		         mainChart.setOption(option, true)
		     };
  	},

  	  	//这是营销订单趋势图
	yh_display(){
		    let echarts = require('echarts/lib/echarts')
		    let chartBox=document.getElementsByClassName('yhcharts')[0]
		    let myChart=document.getElementById('yhChart')
		    function resizeCharts() {//为调整图标尺寸的方法
		        myChart.style.width=chartBox.style.width+'px'
		        myChart.style.height=chartBox.style.height+'px'
		    }
		     let mainChart = echarts.init(myChart)// 基于准备好的dom，初始化echarts实例
		     var option = null;
		     // 指定图表的配置项和数据
		     option = {
		     	title:{
			         text:'用户消费',
			         textStyle:{
			            //文字颜色
			            color:'#f7ff50',
			            //字体风格,'normal','italic','oblique'
			            fontStyle:'normal',
			            //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
			            fontWeight:'normal',
			            //字体系列
			            fontFamily:'sans-serif',
			            //字体大小
			    　　　　 fontSize:14,
			        }
			    },
			    xAxis: {
			        type: 'category',
			        data: ['1日', '2日', '3日', '4日', '5日', '6日', '7日'],
			        axisLine: {
                    lineStyle: {
                        type: 'solid',
                        color: '#fff',//左边线的颜色
                        width:'2'//坐标线的宽度
	                    }
	                },
	                axisLabel: {
	                    textStyle: {
	                        color: '#fff',//坐标值得具体的颜色
	                    }
	                },
	                axisTick:{
				        show:false/*隐藏刻度*/
				    }
			    },
			    yAxis: {
			        type: 'value',
			        axisLine: {
                    lineStyle: {
	                        type: 'solid',
	                        color: 'transparent',//左边线的颜色
	                        width:'2'//坐标线的宽度
	                    }
	                },
			    },
			    series: [{
                    type: 'line',
	                    itemStyle: {
	                        normal: {
	                            color: '#f7ff50'/*线条颜色*/,
	                            label : {show: true}
	                        }
	                    },
	                    data: [180, 92, 1, 994, 190, 10, 1320],
	                }
            	]
			};

		     // 使用刚指定的配置项和数据显示图表。
		     if (option && typeof option === "object") {
		         mainChart.setOption(option, true)
		     };
  	}
  },
  mounted(){
	  	this.yx_display()
	  	this.yh_display()
  }
}
</script>
<style scoped lang="less">

.orderData{
	background-color:#f8f7f7;
	.orderData_title{
		list-style:none;
		display:flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content:space-between;
        background-color:#fff;
        padding:20px 0 12px 0;
        li{
        	text-align:center;
        	flex-grow:1;
        	span{
        		font-family:PingFangSC-Regular;
				font-size:0.9rem;
				color:#333333;
				letter-spacing:0;
        	}
        	label{
        		font-family:PingFangSC-Semibold;
				font-size:1.1rem;
				color:#f54321;
				letter-spacing:0;
				font-weight:600;
        	}
        }
	}
	/*数据展示*/
	.data_display{
	 	margin-top:10px;
	 	.yx_display{
	 		height:auto;
	 		background-color:#fff;
	 		padding-bottom:15px;
	 		.yx_display_title{
	 			width:100%;
	 			height:auto;
	 			box-sizing:border-box;
	 			padding:11px 15px;
	 			font-family:PingFangSC-Semibold;
				font-size:1rem;
				color:#333333;
				letter-spacing:0;
				text-align:left;
				font-weight:600;
				border:1px solid #eeeeee;
	 		}
	 		.yx_display_ftitle{
	 			font-family:PingFangSC-Regular;
				font-size:0.8rem;
				color:#999999;
				letter-spacing:0;
				text-align:center;
				line-height:1.2rem;
	 		}
	 		.yx_display_tab{
	 			width:70%;
	 			margin:21px auto;
				list-style:none;
				display:flex;
		        flex-direction: row;
		        flex-wrap: nowrap;
		        justify-content:space-between;
		        background-color:#fff;
		        li{
		        	text-align:center;
		        	flex-grow:1;
		        	font-family:PingFangSC-Regular;
					font-size:0.8rem;
					color:#777777;
					letter-spacing:0;
					padding:10px 30px;
					border:1px solid #eeeeee;
		        }
		        .li_select{
		        	border:1.5px solid #f54321;
		        }
	 		}
	 	}
	 	.yh_display{
	 		margin-top:10px;
	 		padding-bottom:15px;
	 		height:auto;
	 		background-color:#fff;
	 		.yh_display_title{
	 			width:100%;
	 			height:auto;
	 			box-sizing:border-box;
	 			padding:11px 15px;
	 			font-family:PingFangSC-Semibold;
				font-size:1rem;
				color:#333333;
				letter-spacing:0;
				text-align:left;
				font-weight:600;
				border:1px solid #eeeeee;
	 		}
	 		.yh_display_ftitle{
	 			font-family:PingFangSC-Regular;
				font-size:0.8rem;
				color:#999999;
				letter-spacing:0;
				text-align:center;
				line-height:1.2rem;
	 		}
	 		.yh_display_tab{
	 			width:70%;
	 			margin:21px auto;
				list-style:none;
				display:flex;
		        flex-direction: row;
		        flex-wrap: nowrap;
		        justify-content:space-between;
		        background-color:#fff;
		        li{
		        	text-align:center;
		        	flex-grow:1;
		        	font-family:PingFangSC-Regular;
					font-size:0.8rem;
					color:#777777;
					letter-spacing:0;
					padding:10px 30px;
					border:1px solid #eeeeee;
		        }
		        .li_select{
		        	border:1.5px solid #f54321;
		        }
	 		}
	 	}
	 	.charts{
	 		width:80%;
	 		margin:10px auto;
	 		height:215px;
	 		background:-webkit-gradient(linear, 0% 20%, 8% 100%,from(#e84f57), to(#eb8139));
	 	}
	 	.yhcharts{
	 		width:80%;
	 		margin:10px auto;
	 		height:215px;
	 		background:-webkit-gradient(linear, 0% 20%, 8% 100%,from(#e84f57), to(#eb8139));
	 	}
	}
}
</style>