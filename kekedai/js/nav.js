/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-03-08 15:38:35
 * @version $Id$
 */
 $(document).ready(function(){

var vpath=window.location.pathname;
        vpath=vpath.split('/')[1];
         $('.nav li').removeClass('on');
         $('.article_box .left  li').removeClass('on');
        // 首页导航
        switch (vpath){
            // 主页
            case ' ':
            $('.nav li').eq(0).addClass('on');
            break;
            // 加盟须知
            case 'jmxz':
            $('.nav li').eq(1).addClass('on');
            break;
            case 'sfbz':
            $('.nav li').eq(1).addClass('on');
            break;
            case 'hztj':
            $('.nav li').eq(1).addClass('on');
            break;
            case 'hzlc':
            $('.nav li').eq(1).addClass('on');
            break;
            // 收益
            case 'syfx':
            $('.nav li').eq(2).addClass('on');
            break;
            case 'qjfx':
            $('.nav li').eq(2).addClass('on');
            break;
            case 'hzys':
            $('.nav li').eq(2).addClass('on');
            break;
            case 'hzzc':
            $('.nav li').eq(2).addClass('on');
            break;
            // 加盟
            case 'affiliate':
            $('.nav li').eq(3).addClass('on');
            break;
            // 常见问题
            case 'question':
            $('.nav li').eq(4).addClass('on');
            break;
            // 关于我们
            case 'about':
            $('.nav li').eq(5).addClass('on');
            break;
            // 联系我们
            case 'contact':
            $('.nav li').eq(6).addClass('on');
            break;

        }
        // 加盟须知
         switch (vpath){
            
            case 'jmxz':
            $('.article_box .left  li').eq(0).addClass('on');
            break;
            
            case 'sfbz':
            $('.article_box .left  li').eq(0).addClass('on');
            break;
            case 'hztj':
            $('.article_box .left  li').eq(1).addClass('on');
            break;
            case 'hzlc':
            $('.article_box .left  li').eq(2).addClass('on');
            break;
           

        }
        // 收益分析
        switch (vpath){
            
            case 'syfx':
            $('.article_box .left  li').eq(1).addClass('on');
            break;
            
            case 'qjfx':
            $('.article_box .left  li').eq(0).addClass('on');
            break;
            case 'hzys':
            $('.article_box .left  li').eq(2).addClass('on');
            break;
            case 'hzzc':
            $('.article_box .left  li').eq(3).addClass('on');
            break;
           

        }
        var phone_num_pat=/^1\d{10}$/;
        $('.home-form').submit(function(){
            if($(this).find('.join_num')){
                var phone=$(this).find('.join_num').value();
                if(!phone_num_pat.test(phone)){
                    alert('请输入电话号码！');
                    return false;
                }
            }
            return false;
        });
     $('.home-form2').submit(function(){
         if($(this).find('.join_num')){
             var phone=$(this).find('.join_num').value();
             if(!phone_num_pat.test(phone)){
                 alert('请输入电话号码！');
                 return false;
             }
         }
         return false;
     });
        console.log(phone_num_pat.test(phone));
    })