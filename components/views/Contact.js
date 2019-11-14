export default () => ` <form name="contact" method="POST" data-netlify="true">
<div>
  <label for="name">Enter your name:</label>
  <input type="text" id="name" name="name" />
</div>

<div>
  <label for="email">Enter your email:</label>
  <input type="email" id="email" name="email" />
</div>

<div>
  <label for="fone">Enter your name:</label>
  <input type="tel" id="fone" name="fone" />
</div>

<label for="msg">Enter your message:</label>
<textarea name="msg" id="msg" cols="30" rows="10"></textarea>

<input type="submit" value="Submit">
</form>
`
