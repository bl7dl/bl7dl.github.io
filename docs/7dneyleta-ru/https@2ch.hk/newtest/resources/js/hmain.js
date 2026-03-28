// JavaScript Document<script type="text/javascript">
jQuery(document).ready(function(){

$('.bline .btitle').each(function() {
   var trigger = $(this), state = false, el = trigger.next();
   trigger.click(function(){
      state = !state;
      el.slideToggle(200);
      trigger.parent().toggleClass('inactive');
   });
});


});
