<div class="ask_q_cont col-sm-12 ">

		<div class=" info_ask_main col-sm-12">
				<h2 class="info_ask">Вы можете отпраить вопрос и мы Вам перезвоним! <h2>
				<h2 class="info_ask">Так же оставить отзыв о нашем заведении </h2>
				<h2 class="info_ask">или предложение о сотрудничестве </h2>
		</div> 
           
		
		<div class="data_form_main col-sm-12">
			<form enctype="multipart/form-data" method="post" id="form" onsubmit="send(event, 'send.php')">
				<p class="name_ask">Имя</p>
				<input class="name_ask_1" placeholder="Представьтесь" name="name" type="text" >
				<p class="email_ask">Email</p>
				<input class="email_ask_1" placeholder="Укажите почту" name="email" type="text" >
				<p class="phone_ask">Телефон</p>
				<input class="phone_ask_1" placeholder="Укажите телефон" name="phone" type="text" >
				<p class="massage_ask">Сообщение</p>
				<textarea  class="massage_ask_1" name="text"></textarea>
				<p class="file_ask">Прикрепить файлы</p>
				<input class="file_ask_1" type="file" name="myfile[]" multiple id="myfile">
				<div class="send_ask"><input class="send_ask_1" value="Отправить" type="submit"></div>
		   </form>
		</div>       
 </div> 
          