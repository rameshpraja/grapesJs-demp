export const header = [
  [`
  <style>
      .list {
        padding: 10px 0px;
        display: table-cell;
        cursor: pointer;
      }
      .list:hover .dropdown-content {
        background-color: #f1f1f1;
        display: block;
        left: 0px;
        width: 100%;
        border: solid 1px#eee;
        background-color: #fff;
        color: #000;
        font-size: 15px;
      }
      .dropdown-content {
        display: none;
        position: absolute;
        padding: 10px;
        top: 45px;
      }
      a {
        color: white !important;
      }
    </style>
  <header style="position: relative; z-index: 9" class="container-screen">
  <div class="clearfix mobile-header">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div
            class="header-currency d-flex"
            style="margin-top: 7.5%; vertical-align: top"
          >
            <div class="currency" style="line-height: 2">Currency:</div>
            <div class="dropdown mx-2">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                EN
              </button>
              <div
                class="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="logo d-flex justify-content-center">
            <a href="">
              <img
                src="https://www.kuberindustries.co.in/uploads/kuberindustries/images/kuber-l00go-769839_header_logo.jpg?v=1"
                alt=""
              />
            </a>
          </div>
        </div>
        <div class="col-md-4">
          <div class="row justify-content-end" style="margin-top: 7.5%">
            <span class="mx-1"> Login or Signup </span>
            <span class="mx-1"> | Cart </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="clearfix mobile-header mt-1">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <nav
            style="
              position: relative;
              padding: 0;
              margin: 0 auto;
              padding: 0 10px;

              width: 100%;
              background-color: #1d374e;
            "
          >
            <ul
              style="
                position: relative;
                padding: 0;
                margin: 0 auto;
                width: 100%;
                display: flex;
                justify-content: space-between;
                color: white;
                list-style: none;
              "
            >
              <li class="list">
                <a href="">Home</a>
              </li>
              <li class="list">
                Home Storage & Organization
                <i id="it2u9" class="fa fa-sort-desc"></i>
                <div class="dropdown-content">
                  <div class="row">
                    <div class="col-md-2">Saree Covers</div>
                    <div class="col-md-2">Jewellery Organiser</div>
                    <div class="col-md-2">Space Saver Bags</div>
                    <div class="col-md-2">Shirt Trouser / Suit Cover</div>
                    <div class="col-md-2">Bangle Boxes</div>
                    <div class="col-md-2">Boxes Basket & Bins</div>
                    <div class="col-md-2">Wardrobe Organiser</div>
                    <div class="col-md-2">Kits & Pouches</div>
                  </div>
                </div>
              </li>
              <li class="list">
                Home Furnishing <i id="it2u9" class="fa fa-sort-desc"></i>
                <div class="dropdown-content">
                  <div class="row">
                    <div class="col-md-2">Saree Covers</div>
                    <div class="col-md-2">Jewellery Organiser</div>
                    <div class="col-md-2">Space Saver Bags</div>
                    <div class="col-md-2">Shirt Trouser / Suit Cover</div>
                    <div class="col-md-2">Bangle Boxes</div>
                    <div class="col-md-2">Boxes Basket & Bins</div>
                    <div class="col-md-2">Wardrobe Organiser</div>
                    <div class="col-md-2">Kits & Pouches</div>
                  </div>
                </div>
              </li>
              <li class="list">
                Utilities <i id="it2u9" class="fa fa-sort-desc"></i>
                <div class="dropdown-content">
                  <div class="row">
                    <div class="col-md-2">Saree Covers</div>
                    <div class="col-md-2">Jewellery Organiser</div>
                    <div class="col-md-2">Space Saver Bags</div>
                    <div class="col-md-2">Shirt Trouser / Suit Cover</div>
                    <div class="col-md-2">Bangle Boxes</div>
                    <div class="col-md-2">Boxes Basket & Bins</div>
                    <div class="col-md-2">Wardrobe Organiser</div>
                    <div class="col-md-2">Kits & Pouches</div>
                  </div>
                </div>
              </li>
              <li class="list">
                Bags, Wallets and Luggage
                <i id="it2u9" class="fa fa-sort-desc"></i>
                <div class="dropdown-content">
                  <div class="row">
                    <div class="col-md-2">Saree Covers</div>
                    <div class="col-md-2">Jewellery Organiser</div>
                    <div class="col-md-2">Space Saver Bags</div>
                    <div class="col-md-2">Shirt Trouser / Suit Cover</div>
                    <div class="col-md-2">Bangle Boxes</div>
                    <div class="col-md-2">Boxes Basket & Bins</div>
                    <div class="col-md-2">Wardrobe Organiser</div>
                    <div class="col-md-2">Kits & Pouches</div>
                  </div>
                </div>
              </li>
              <li class="list">
                Apparels <i id="it2u9" class="fa fa-sort-desc"></i>
                <div class="dropdown-content">
                  <div class="row">
                    <div class="col-md-2">Saree Covers</div>
                    <div class="col-md-2">Jewellery Organiser</div>
                    <div class="col-md-2">Space Saver Bags</div>
                    <div class="col-md-2">Shirt Trouser / Suit Cover</div>
                    <div class="col-md-2">Bangle Boxes</div>
                    <div class="col-md-2">Boxes Basket & Bins</div>
                    <div class="col-md-2">Wardrobe Organiser</div>
                    <div class="col-md-2">Kits & Pouches</div>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</header>
  `,'header 0'
  ],
  [
    `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">
      <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="" srcset="" height="50px">
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Feature</a>
        </li>
      </ul>
    </div>
  </nav>
  `,
    'Header 1',
  ],
  [
    `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">
      <img
        src="https://cdn.logo.com/hotlink-ok/logo-social.png"
        alt=""
        srcset=""
        height="50px"
      />
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
          >
            Product 1
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Sub product1</a>
            <a class="dropdown-item" href="#">Sub product2</a>
            <a class="dropdown-item" href="#">Sub product3</a>
            <a class="dropdown-item" href="#">Sub product4</a>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
          >
            Product 2
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Sub product1</a>
            <a class="dropdown-item" href="#">Sub product2</a>
            <a class="dropdown-item" href="#">Sub product3</a>
            <a class="dropdown-item" href="#">Sub product4</a>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
          >
            Product 3
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Sub product1</a>
            <a class="dropdown-item" href="#">Sub product2</a>
            <a class="dropdown-item" href="#">Sub product3</a>
            <a class="dropdown-item" href="#">Sub product4</a>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
          >
            Product 4
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Sub product1</a>
            <a class="dropdown-item" href="#">Sub product2</a>
            <a class="dropdown-item" href="#">Sub product3</a>
            <a class="dropdown-item" href="#">Sub product4</a>
          </div>
        </li>
        <li class="nav-item m-auto">
          <i class="fa fa-shopping-cart" style="font-size: 18px"></i>
        </li>
      </ul>
    </div>
  </nav>
  <script>
    document.querySelectorAll('.dropdown-toggle').forEach((element) =>
      element.addEventListener('click', function () {
        nextNode = this.nextElementSibling;
        if (!nextNode.classList.contains('show')) {
          nextNode.classList.add('show');
        } else {
          nextNode.classList.remove('show');
        }
      })
    );
  </script>
  `,
    'Header 2',
  ],
  [
    `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">
      <img
        src="https://cdn.logo.com/hotlink-ok/logo-social.png"
        alt=""
        srcset=""
        height="50px"
      />
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <form class="form-inline my-2 my-lg-0 position-relative">
      <input
        id="searchValue"
        class="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        oninput="search(this)"
      />
      <div
        class="dropdown-menu"
        id="suggestionbar"
        aria-labelledby="navbarDropdown"
        style="max-width: 300px; overflow: hidden"
      ></div>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit" onclick="searchBtn()">
        Search
      </button>
    </form>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
          >
            Product 1
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Sub product1</a>
            <a class="dropdown-item" href="#">Sub product2</a>
            <a class="dropdown-item" href="#">Sub product3</a>
            <a class="dropdown-item" href="#">Sub product4</a>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
          >
            Product 2
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Sub product1</a>
            <a class="dropdown-item" href="#">Sub product2</a>
            <a class="dropdown-item" href="#">Sub product3</a>
            <a class="dropdown-item" href="#">Sub product4</a>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
          >
            Product 3
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Sub product1</a>
            <a class="dropdown-item" href="#">Sub product2</a>
            <a class="dropdown-item" href="#">Sub product3</a>
            <a class="dropdown-item" href="#">Sub product4</a>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
          >
            Product 4
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Sub product1</a>
            <a class="dropdown-item" href="#">Sub product2</a>
            <a class="dropdown-item" href="#">Sub product3</a>
            <a class="dropdown-item" href="#">Sub product4</a>
          </div>
        </li>
        <li class="nav-item m-auto">
          <i class="fa fa-shopping-cart" style="font-size: 18px"></i>
        </li>
      </ul>
    </div>
  </nav>
  <script>
    const searchBox = document.getElementById('suggestionbar');
    const xhttp = new XMLHttpRequest();
    let response;
    xhttp.onload = function () {
      response = JSON.parse(this.responseText);
    };
    xhttp.open('GET', 'https://fakestoreapi.com/products', true);
    xhttp.send();
    document.querySelectorAll('.dropdown-toggle').forEach((element) =>
      element.addEventListener('click', function () {
        nextNode = this.nextElementSibling;
        if (!nextNode.classList.contains('show')) {
          nextNode.classList.add('show');
        } else {
          nextNode.classList.remove('show');
        }
      })
    );
    function search(key) {
      if (!searchBox.classList.contains('d-block')) {
        searchBox.classList.add('d-block');
      }
      let result = [];
      response.forEach((element) => {
        if (element.title.toLowerCase().includes(key.value.toLowerCase())) {
          result.push(element);
        }
      });
      if (result.length > 0) {
        searchBox.innerHTML = '';
        result.forEach((element) => {
          searchBox.innerHTML += '<a class="dropdown-item suggestion item" href="#">' + element.title + '</a>';
        });
      } else {
        searchBox.innerHTML = '<a class="dropdown-item suggestion item" href="#">No result found</a>';
      }
    }
    function searchBtn() {
      searchBox.classList.remove('d-block');
    }
  </script>
  `,
    'Header 3',
  ],
];

export const banner = [
  [
    `
    <style>
    * {
      box-sizing: border-box;
    }
    body {
      font-family: Verdana, sans-serif;
      margin: 0;
    }
    .mySlides {
      display: none;
    }
    img {
      vertical-align: middle;
    }

    /* Slideshow container */
    .slideshow-container {
      position: relative;
    }

    /* Next & previous buttons */
    .prev {
      cursor: pointer;
      position: absolute;
      top: 50%;
      width: auto;
      padding: 16px;
      margin-top: -22px;
      color: white;
      font-weight: bold;
      font-size: 18px;
      transition: 0.6s ease;
      border-radius: 0 3px 3px 0;
      user-select: none;
    }

    .next {
      cursor: pointer;
      position: absolute;
      top: 50%;
      width: auto;
      padding: 16px;
      margin-top: -22px;
      color: white;
      font-weight: bold;
      font-size: 18px;
      transition: 0.6s ease;
      right: 0;
      border-radius: 3px 0 0 3px;
      user-select: none;
    }

    /* On hover, add a black background color with a little bit see-through */
    .prev:hover,
    .next:hover {
      background-color: rgba(0, 0, 0, 0.8);
    }

    /* Caption text */
    .text {
      color: #f2f2f2;
      font-size: 15px;
      padding: 8px 12px;
      position: absolute;
      bottom: 8px;
      width: 100%;
      text-align: center;
    }

    /* Number text (1/3 etc) */
    .numbertext {
      color: #f2f2f2;
      font-size: 12px;
      padding: 8px 12px;
      position: absolute;
      top: 0;
    }

    /* The dots/bullets/indicators */
    .dot {
      cursor: pointer;
      height: 15px;
      width: 15px;
      margin: 0 2px;
      background-color: #bbb;
      border-radius: 50%;
      display: inline-block;
      transition: background-color 0.6s ease;
    }

    .active,
    .dot:hover {
      background-color: #717171;
    }

    /* Fading animation */
    .fade {
      -webkit-animation-name: fade;
      -webkit-animation-duration: 1.5s;
      animation-name: fade;
      animation-duration: 1.5s;
    }

    @-webkit-keyframes fade {
      from {
        opacity: 0.4;
      }
      to {
        opacity: 1;
      }
    }

    @keyframes fade {
      from {
        opacity: 0.4;
      }
      to {
        opacity: 1;
      }
    }

    /* On smaller screens, decrease text size */
    @media only screen and (max-width: 300px) {
      .prev,
      .next,
      .text {
        font-size: 11px;
      }
    }
  </style>
    <div class="slideshow-container">
      <div class="mySlides ">
        <div class="numbertext">1 / 3</div>
        <img
          src="http://bloomidea.com/sites/default/files/styles/og_image/public/blog/6-%20Fotografia%20de%20Produto%20o%20que%20e%CC%81%20e%20como%20escolher%20a%20mais%20adequada%20PEDIDA.png?itok=a1DZeAuS"
          style="width: 100%;height: 450px;"
        />
        <div class="text">Caption Text</div>
      </div>

      <div class="mySlides ">
        <div class="numbertext">2 / 3</div>
        <img
          src="https://fdn.gsmarena.com/imgroot/news/21/04/iphone-13-product-red-renders/-1200/gsmarena_002.jpg"
          style="width: 100%;height: 450px;"
        />
        <div class="text">Caption Two</div>
      </div>

      <div class="mySlides ">
        <div class="numbertext">3 / 3</div>
        <img
          src="https://api.time.com/wp-content/uploads/2018/11/sweetfoam-sustainable-product.jpg?quality=85"
          style="width: 100%; height: 450px;"
        />
        <div class="text">Caption Three</div>
      </div>

      <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
      <a class="next" onclick="plusSlides(1)">&#10095;</a>
    </div>
    <br />

    <div style="text-align: center">
      <span class="dot" onclick="currentSlide(1)"></span>
      <span class="dot" onclick="currentSlide(2)"></span>
      <span class="dot" onclick="currentSlide(3)"></span>
    </div>

    <script>
      var slideIndex = 1;
      showSlides(slideIndex);

      function plusSlides(n) {
        showSlides((slideIndex += n));
      }

      function currentSlide(n) {
        showSlides((slideIndex = n));
      }

      function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName('mySlides');
        var dots = document.getElementsByClassName('dot');
        if (n > slides.length) {
          slideIndex = 1;
        }
        if (n < 1) {
          slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = 'none';
        }
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(' active', '');
        }
        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].className += ' active';
      }
    </script>
  `,
    'Banner 1',
  ],
];

export const product = [
  [
    [
      `
    <div class="container mt-3">
      <div class="row">
        <div class="col-md-3 my-1">
          <div class="card">
            <div class="card-body">
              <img
                src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/5.jpg"
                alt=""
                width="100%"
                height="200px"
              />
              <p class="card-text">
                Leather sleeve - $49.99
              </p>
              <a href="#" class="btn btn-primary">Add to cart</a>
              <a href="#" class="btn btn-success">Buy Now</a>
            </div>
          </div>
        </div>
        <div class="col-md-3 my-1">
          <div class="card">
            <div class="card-body">
              <img
                src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/5.jpg"
                alt=""
                width="100%"
                height="200px"
              />
              <p class="card-text">
                Leather sleeve - $49.99
              </p>
              <a href="#" class="btn btn-primary">Add to cart</a>
              <a href="#" class="btn btn-success">Buy Now</a>
            </div>
          </div>
        </div>
        <div class="col-md-3 my-1">
          <div class="card">
            <div class="card-body">
              <img
                src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/5.jpg"
                alt=""
                width="100%"
                height="200px"
              />
              <p class="card-text">
                Leather sleeve - $49.99
              </p>
              <a href="#" class="btn btn-primary">Add to cart</a>
              <a href="#" class="btn btn-success">Buy Now</a>
            </div>
          </div>
        </div>
        <div class="col-md-3 my-1">
          <div class="card">
            <div class="card-body">
              <img
                src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/5.jpg"
                alt=""
                width="100%"
                height="200px"
              />
              <p class="card-text">
                Leather sleeve - $49.99
              </p>
              <a href="#" class="btn btn-primary">Add to cart</a>
              <a href="#" class="btn btn-success">Buy Now</a>
            </div>
          </div>
        </div>
        <div class="col-md-3 my-1">
          <div class="card">
            <div class="card-body">
              <img
                src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/5.jpg"
                alt=""
                width="100%"
                height="200px"
              />
              <p class="card-text">
                Leather sleeve - $49.99
              </p>
              <a href="#" class="btn btn-primary">Add to cart</a>
              <a href="#" class="btn btn-success">Buy Now</a>
            </div>
          </div>
        </div>
        <div class="col-md-3 my-1">
          <div class="card">
            <div class="card-body">
              <img
                src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/5.jpg"
                alt=""
                width="100%"
                height="200px"
              />
              <p class="card-text">
                Leather sleeve - $49.99
              </p>
              <a href="#" class="btn btn-primary">Add to cart</a>
              <a href="#" class="btn btn-success">Buy Now</a>
            </div>
          </div>
        </div>
        <div class="col-md-3 my-1">
          <div class="card">
            <div class="card-body">
              <img
                src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/5.jpg"
                alt=""
                width="100%"
                height="200px"
              />
              <p class="card-text">
                Leather sleeve - $49.99
              </p>
              <a href="#" class="btn btn-primary">Add to cart</a>
              <a href="#" class="btn btn-success">Buy Now</a>
            </div>
          </div>
        </div>
        <div class="col-md-3 my-1">
          <div class="card">
            <div class="card-body">
              <img
                src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/5.jpg"
                alt=""
                width="100%"
                height="200px"
              />
              <p class="card-text">
                Leather sleeve - $49.99
              </p>
              <a href="#" class="btn btn-primary">Add to cart</a>
              <a href="#" class="btn btn-success">Buy Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>,`,
    ],['Product list'],
  ],
  [
    [
      `
    
        <div class="col-md-3 my-1">
          <div class="card">
            <div class="card-body">
              <img
                src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/5.jpg"
                alt=""
                width="100%"
                height="200px"
              />
              <p class="card-text">
                Leather sleeve - $49.99
              </p>
              <a href="#" class="btn btn-primary">Add to cart</a>
              <a href="#" class="btn btn-success">Buy Now</a>
            </div>
          </div>
        </div>
        `,
    ],['Single Product'],
  ],
];
