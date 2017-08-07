/**配置连接服务器信息***/

var  m_config={
	path:'http://192.168.63.1:8080/Stores/'/**服务器的连接地址*/
};


function dateTimeFormat(date){
	var mydate=new Date(date);
	var myyear=mydate.getYear()+1900; 
	var mymonth=mydate.getMonth()+1;//注：月数从0~11为一月到十二月 
	var mydat=mydate.getDate(); 
	var myhours=mydate.getHours(); 
	var myminutes=mydate.getMinutes(); 
	var myseconds=mydate.getSeconds();
	return myyear+"-"+mymonth+"-"+mydat+" "+myhours+":"+myminutes+":"+myseconds;
}
function dateFormat(date){
	var mydate=new Date(date);
	var myyear=mydate.getYear()+1900; 
	var mymonth=mydate.getMonth()+1;//注：月数从0~11为一月到十二月 
	var mydat=mydate.getDate(); 
	return myyear+"-"+mymonth+"-"+mydat;
}