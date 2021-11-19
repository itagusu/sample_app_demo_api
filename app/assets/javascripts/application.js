// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery

//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

alert('Hello World');

let hello = 'Hello World'
alert(hello)

let orange = 100;
let apple = 120;

if(orange > apple){
  alert('みかんが高い');
}else if(orange == apple){
  alert('一緒');
}else{
  alert('リンゴが高い');
}

let max = 10000;
let num = 1;
let count = 0;

while(num < max){
  num = num*2;
  count = count + 1;
}

alert('２を欠け続けて' + max + 'を超えるのは' + count + '回です')

$(document).ready(function () {
  $('.jquery').on('click', function(){
    $(this).css('color','red');
  });
});

