export const Headers = [
  `
<style>
.header {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
}
.logo {
  background-color: whitesmoke;
  flex-grow: 1;
}
.section {
  background-color: whitesmoke;
  flex-grow: 3;
  display: flex;
  align-content: center;
  justify-content: flex-end;
}
.section ul {
  display: flex;
  justify-content: flex-end;
}
.section ul li {
  list-style-position: initial;
  list-style-image: initial;
  list-style-type: none;
  font-size: 18px;
  margin: auto;
  margin-left: 10px;
  margin-right: 10px;
}
</style>
<div class="header">
        <img
          id="iz2f2"
          data-gjs-type="image"
          draggable="true"
          src="https://images.pexels.com/photos/430205/pexels-photo-430205.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
          class=""
        />
        <div class="section">
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Section</a></li>
            <li><a href="">Feature</a></li>
          </ul>
        </div>
      </div>
`,
  `
<style>
a {
  text-decoration: none;
  color: inherit;
}

body {
  font: normal 18px 'Open Sans', sans-serif;
  background: #fafafa;
  color: #333;
}
img {
  width: 200px
}

main {
  min-height: 100vh;
}

header {
  background: white;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}
  h1{
      font: normal 4em 'Playfair Display SC', serif;
      text-align:center;
  }

  nav {
      max-width: 800px;
      margin: auto;
      display: flex;
      flex-wrap: wrap;
  }

      nav a {
          flex-grow: 1;
          text-align: center;
          padding: 1em;
          position: relative;
      }

      // animmation
      nav a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right:0;
          height: 2px;
          transform: scaleX(0);
          background: #333;
          transition: 0.7s transform cubic-bezier(0.06, 0.9, 0.28, 1);
      }

      nav a:hover::after{
          transform: scaleX(1)
      }
</style>
<main>
    <header>
        <h1><img src="https://images.pexels.com/photos/430205/pexels-photo-430205.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></h1>
        <nav>
            <a href="#">Home</a>
            <a href="#">Features</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
        </nav>
    </header>
</main>
`,
];

export const Features = [
  `
  <style>
body {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
}

html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.column {
  float: left;
  width: 33.3%;
  margin-bottom: 16px;
  padding: 0 8px;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 8px;
}

.about-section {
  padding: 50px;
  text-align: center;
  background-color: #474e5d;
  color: white;
}

.container {
  padding: 0 16px;
}

.container::after, .row::after {
  content: "";
  clear: both;
  display: table;
}

.title {
  color: grey;
}

.button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
}

.button:hover {
  background-color: #555;
}

@media screen and (max-width: 650px) {
  .column {
    width: 100%;
    display: block;
  }
}
</style>
<div class="row">
  <div class="column">
    <div class="card">
      <img src="/w3images/team1.jpg" alt="Jane" style="width:100%">
      <div class="container">
        <h2>Jane Doe</h2>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>jane@example.com</p>
        <p><button class="button">Visit</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="/w3images/team2.jpg" alt="Mike" style="width:100%">
      <div class="container">
        <h2>Mike Ross</h2>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>mike@example.com</p>
        <p><button class="button">Visit</button></p>
      </div>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <img src="/w3images/team3.jpg" alt="John" style="width:100%">
      <div class="container">
        <h2>John Doe</h2>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>john@example.com</p>
        <p><button class="button">Visit</button></p>
      </div>
    </div>
  </div>
</div>
`,
  `
<style>
body {
font-family: Arial, Helvetica, sans-serif;
margin-bottom: 100px;
}

html {
box-sizing: border-box;
}

*, *:before, *:after {
box-sizing: inherit;
}

.column {
float: left;
width: 25%;
margin-bottom: 16px;
padding: 0 8px;
}

.card {
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
margin: 8px;
}

.about-section {
padding: 50px;
text-align: center;
background-color: #474e5d;
color: white;
}

.container {
padding: 0 16px;
}

.container::after, .row::after {
content: "";
clear: both;
display: table;
}

.title {
color: grey;
}

.button {
border: none;
outline: 0;
display: inline-block;
padding: 8px;
color: white;
background-color: #000;
text-align: center;
cursor: pointer;
width: 100%;
}

.button:hover {
background-color: #555;
}

@media screen and (max-width: 650px) {
.column {
  width: 100%;
  display: block;
}
}
</style>
<div class="row">
<div class="column">
  <div class="card">
    <img src="/w3images/team1.jpg" alt="Jane" style="width:100%">
    <div class="container">
      <h2>Jane Doe</h2>
      <p>Some text that describes me lorem ipsum ipsum lorem.</p>
      <p>jane@example.com</p>
      <p><button class="button">Visit</button></p>
    </div>
  </div>
</div>

<div class="column">
  <div class="card">
    <img src="/w3images/team2.jpg" alt="Mike" style="width:100%">
    <div class="container">
      <h2>Mike Ross</h2>
      <p>Some text that describes me lorem ipsum ipsum lorem.</p>
      <p>mike@example.com</p>
      <p><button class="button">Visit</button></p>
    </div>
  </div>
</div>
<div class="column">
  <div class="card">
    <img src="/w3images/team2.jpg" alt="Mike" style="width:100%">
    <div class="container">
      <h2>Mike Ross</h2>
      <p>Some text that describes me lorem ipsum ipsum lorem.</p>
      <p>mike@example.com</p>
      <p><button class="button">Visit</button></p>
    </div>
  </div>
</div>

<div class="column">
  <div class="card">
    <img src="/w3images/team3.jpg" alt="John" style="width:100%">
    <div class="container">
      <h2>John Doe</h2>
      <p>Some text that describes me lorem ipsum ipsum lorem.</p>
      <p>john@example.com</p>
      <p><button class="button">Visit</button></p>
    </div>
  </div>
</div>
</div>

`,
];

export const AboutPages = [
  `
 <style>
 .about-me ul li{
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
  list-style-type:none;
}

.postsleft {
  width: 300px;
  float: left;
}

.postsright {
  width: 620px;
  float: left; 
}

p.home {
  margin-left:21px !important;
  padding-right:24px !important;
}

h3.post-title-home {
  margin-left:21px !important;
  padding-right:24px !important;
}


 </style>
 <div class="about-me">
<ul>
				<li class="">
							
					<div class="postsleft">
								
						<a href="#">
<img width="300" height="250" src="#" class="attachment-blog_thumb_s wp-post-image" alt="" title=""/>
						</a>
							
					</div>
					
					<div class="postsright">
							
						<h3 class="post-title-home">About</h3>
							<p class="home">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
							</p>
				
						
							
					</div>
							
			</li>
		</ul>
  </div>
 `,
];

export const ContactPages = [
  `
<style>
#contact {width:100%; height:100%; margin 0 auto; background: #DDD; }

.container {width:960px; height:auto; margin: 0 auto; padding: 50px 0;}

#contact .container form input,
#contact .container form textarea {
	width:97.4%;
	height:30px;
	padding:5px 10px;
	font-size: 12px;
	color:#999;
	letter-spacing:1px;
	background: #FFF;
	border:2px solid #FFF;
	margin-bottom:25px;
  -webkit-transition:all .1s ease-in-out;
	-moz-transition:all .1s ease-in-out;
	-ms-transition:all .1s ease-in-out;
	-o-transition:all .1s ease-in-out;
	transition:all .1s ease-in-out;}

#contact .container form input:focus,
#contact .container form textarea:focus {
	border:2px solid #dd4545;
	color:#999;}

#contact .container form textarea {
	height:150px;}

#contact .container form .submit {
	width:100%;
	padding:5px 10px;
	font-size: 12px;
	letter-spacing:1px;
	background:#dd4545;
	height:40px;
	text-transform:uppercase;
	letter-spacing:1px;
	color:#FFF;
	border:2px solid #b43838;
  -webkit-transition:all .1s ease-in-out;
	-moz-transition:all .1s ease-in-out;
	-ms-transition:all .1s ease-in-out;
	-o-transition:all .1s ease-in-out;
	transition:all .1s ease-in-out;}

#contact .container form .submit:hover {
	color:#FFF;
	border:2px solid #dd4545;
	background: #b43838;
	cursor:pointer;}

#contact .container form .required {
	color:#b43838;}
</style>
<section id="contact">
  
<div class="container">

<form name="htmlform" method="post" action="toyousender.php">

<input type="text" name="first_name" placeholder="NAME" required>
  
<input  type="email" name="email" placeholder="MAIL" required>
  
<textarea name="comments" placeholder="MESSAGE" required ></textarea>
  
<button name="send" type="submit" class="submit">SEND</button>
  
</form>
 
  </div>
  </section>
`,
];

export const boilerPlate = [
  [
    `
  <style>
  .flex {
    display: flex;
    width: 100% !important;
    justify-content: space-between;
    min-height:100px;
    height:fit-content;
  }
  .flex-item {
    flex: 1;
    margin: 5px;
  }
  </style>
  <div class="flex border">
  <div class="flex-item">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Exercitationem, a eaque officia at quidem dignissimos veniam
            laudantium animi tempora voluptas dolorum perspiciatis iure eius
            similique, id ipsa maiores expedita. Vero temporibus reiciendis saepe,
            magni labore placeat quasi nihil fugit dolore eum, ex consectetur, est
            ad cum perferendis quis minima assumenda?
          </div>
          <div class="flex-item">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Exercitationem, a eaque officia at quidem dignissimos veniam
          laudantium animi tempora voluptas dolorum perspiciatis iure eius
          similique, id ipsa maiores expedita. Vero temporibus reiciendis saepe,
          magni labore placeat quasi nihil fugit dolore eum, ex consectetur, est
          ad cum perferendis quis minima assumenda?
        </div>
    </div>
  `,
    "flexbox",
  ],
  [
    `
  <style>
  .flex-item {
    flex: 1;
    margin: 5px;
  }
  </style>
          <div class="flex-item ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Exercitationem, a eaque officia at quidem dignissimos veniam
            laudantium animi tempora voluptas dolorum perspiciatis iure eius
            similique, id ipsa maiores expedita. Vero temporibus reiciendis saepe,
            magni labore placeat quasi nihil fugit dolore eum, ex consectetur, est
            ad cum perferendis quis minima assumenda?
          </div>
  `,
    "flex-item",
  ],
  [
    `

        <style>
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          .grid-container {
            min-width:100%;
            display: flex;
            grid-template-columns: auto auto auto auto auto auto;
          }
          .grid-item {
            flex-grow:1;
            border: 1px solid rgba(0, 0, 0, 0.8);
            min-height: 50px;
            height:min-content;
            margin:10px;
          }
          .grid-item {
            border: none !important;
          }
        </style>
        <div class="grid-container">
          <div class="grid-item"></div>
          <div class="grid-item"></div>
          <div class="grid-item"></div>
          <div class="grid-item"></div>
          <div class="grid-item"></div>
          <div class="grid-item"></div>
        </div>
       
     
  `,
    "grid-layout",
  ],
  [`
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/jquery.gridster/0.5.6/jquery.gridster.css"
        rel="stylesheet"
      />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.gridster/0.5.6/jquery.gridster.min.js"></script>
      <script type="text/javascript">
        $(function () {
          $('.gridster .col')
            .gridster({
              widget_margins: [5, 5],
              widget_base_dimensions: [50, 50],
              helper: 'clone',
              widget_selector: 'div.row',
              max_cols: 25,
              min_cols: 1,
              resize: {
                enabled: true,
              },
            })
            .data('gridster');
        });
      </script>
      <style type="text/css">
        li {
          background-color: hotpink;
          list-style-type: none;
        }
        .row {
          background-color: aquamarine;
        }
        .gridster {
          width: 100%;
          height: 100%;
          background-color: bisque;
        }
        .gridster > * {
          margin: 0 !important;
        }
  
        .header {
          overflow: hidden;
          background-color: #f1f1f1;
          padding: 20px 10px;
        }
  
        .header a {
          float: left;
          color: black;
          text-align: center;
          padding: 12px;
          text-decoration: none;
          font-size: 18px;
          line-height: 25px;
          border-radius: 4px;
        }
  
        .header a.logo {
          font-size: 25px;
          font-weight: bold;
        }
  
        .header a:hover {
          background-color: #ddd;
          color: black;
        }
  
        .header a.active {
          background-color: dodgerblue;
          color: white;
        }
  
        .header-right {
          float: right;
        }
  
        .heading {
          font-size: 20px;
          text-align: center;
        }
        .list {
          padding-left: 0px;
        }
        .list li {
          height: 40px;
          text-align: center;
        }
        .list li:hover {
          background-color: grey;
        }
      </style>
      <title></title>
    </head>
    <body>
      <div class="gridster">
        <div class="col">
          <div
            class="row"
            data-row="2"
            data-col="1"
            data-sizex="3"
            data-sizey="10"
          >
            <div class="sidebar">
              <h6 class="heading">Header</h6>
              <ul class="list">
                <li>part1</li>
                <li>part2</li>
                <li>part3</li>
              </ul>
            </div>
          </div>
          <div
            class="row"
            data-row="2"
            data-col="2"
            data-sizex="1"
            data-sizey="1"
          ></div>
  
          <div
            class="row"
            data-row="1"
            data-col="1"
            data-sizex="22"
            data-sizey="2"
          >
            <div class="header">
              <a href="#default" class="logo">CompanyLogo</a>
              <div class="header-right">
                <a class="active" href="#home">Home</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  </html>  
  `,
    "gridster",
  ],
];

export const element = [
  [
    `<div
    class="row"
    data-row="2"
    data-col="2"
    data-sizex="1"
    data-sizey="1"
  ></div>`,
    `Dummy div`,
  ],
  [
    `
    <label for="" style="width: 100%; ">Lable</label>
    <input type="text" style="width: 100%;">`,
    `Input`,
  ],
  [
    `<h2 style="width: 100%; height:100%; margin:0;padding:0;">This is heading</h2>
    `,
    `Heading2`,
  ],
  [
    `<div> <button style="margin:0;padding:0; width: 100%; height:100%">Demo button</button> </div>
    `,
    `Button`,
  ],
];

export const layout = [
  `<!DOCTYPE html>
  <html>
  <head>
    <style type="text/css">
      *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
      header{
        width: 100%;
        height: 100px;
      }
      .body{
        display: flex;
        width: 100%;
        min-height: 500px;
      }
      .content{
        display: flex;
        flex-direction:column;
        flex-grow: 1;
      }
      .nav{
        width: 30%;
      }
      .border{
        border: 1px solid black;
        background-color: whitesmoke;
      }
    </style>
  </head>
  <body>
    <header class="border"><div></div>Insert header</header>
    <div class="body">
      <nav class="nav border"><div></div>Insert navigation bar</nav>
      <div class="content border"><div></div></div>
    </div>
    <div class="content border">
    <div></div>
      Insert body content
    </div>
  </body>
  </html>`,
];
