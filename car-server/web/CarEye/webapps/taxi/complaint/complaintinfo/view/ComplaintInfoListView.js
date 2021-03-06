Ext.define('ComplaintInfoApp.view.ComplaintInfoListView' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.complaintInfoListView',
			title: '投诉列表',
			autoWidth: true,
			autoHeight : true,
			region: "center",
			border: true,
			frame: true,
			store: "ComplaintInfoListStore",
			multiSelect: true,
			viewConfig : {enableTextSelection:true}, //grid中的内容能够复制 
			stripeRows:true, //表格是否隔行换色，默认为false
			loadMask:true,   //是否在加载数据时显示遮罩效果，默认为false
			selModel: { selType: 'checkboxmodel' }, //在首列實現checkbox，僅此在首列
			columns: [
			{ header: 'ID', width:50, dataIndex: 'id', hidden: true },
			{ header: '处理状态', width:100, dataIndex: 'dealstatus', sortable: true ,renderer:function(value){
					if(value == 1){
						return "<font color='red'>未处理</font>";
					}else if(value==2){
						return "<font color='green'>已处理</font>";
					}else{
					    return "";
					 }
			}},
			{ header: '用户手机号', width:100, dataIndex: 'phone', sortable: true },
//			{ header: '公司ID', width:50, dataIndex: 'blocid', hidden: true },
			{ header: '企业名称', width:150, dataIndex: 'blocname', sortable: true },
			{ header: '车牌号', width:150, dataIndex: 'carnumber', sortable: true },
			{ header: '司机名称', width:100, dataIndex: 'drivername', sortable: true },
			{ header: '司机手机号', width:100, dataIndex: 'driverphone', sortable: true },
			{ header: '投诉类型', width:150, dataIndex: 'typename', sortable: true },
			{ header: '投诉描述', width:200, dataIndex: 'remark', sortable: true },
			{ header: '乘客姓名', width:100, dataIndex: 'passengername', sortable: true },
			{ header: '乘客手机号', width:100, dataIndex: 'passengerphone', sortable: true },
			{ header: '订单号', width:100, dataIndex: 'orderid', sortable: true },
			{ header: '投诉时间', width:130, dataIndex: 'complainttime', sortable: true },
			{ header: '处理时间', width:130, dataIndex: 'dealtime', sortable: true },
			{ header: '处理人', width:100, dataIndex: 'dealman', sortable: true },
			{ header: '处理内容', width:200, dataIndex: 'dealcontent', sortable: true }
			],
            tbar:[{
                text:'处理',
                id: '160701',
                tooltip:'处理投诉',
                iconCls:'edit',
                action : 'deal'
            },{
                text:'删除',
                id: '160702',
                tooltip:'删除投诉',
                iconCls:'remove',
                action : 'delete'
            },{
                text:'Excel导出',
                id: '160703',
                tooltip:'导出投诉',
                iconCls:'common-excel-icon',
                action : 'export'
            }],
			bbar : {
				xtype : 'pagingtoolbar',
				store: "ComplaintInfoListStore",   
	            displayInfo: true,   
	            displayMsg: '显示 {0} - {1} 条，共计 {2} 条',   
	            emptyMsg: "没有数据" 
			}
		
});

