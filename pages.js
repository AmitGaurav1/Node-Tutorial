let codehome=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Website</title>

    <style>
        body {
            margin: 0;
            font-family: Arial, sans-serif;
        }

        /* Navigation Bar */
        nav {
            background-color: #333;
            color: white;
            display: flex;
            justify-content: space-between;
            padding: 15px 40px;
        }

        nav a {
            color: white;
            text-decoration: none;
            margin-left: 20px;
            font-size: 18px;
        }

        nav a:hover {
            text-decoration: underline;
        }

        /* Hero Section */
        .hero {
            text-align: center;
            padding: 100px 20px;
            background: linear-gradient(to right, #007bff, #00c6ff);
            color: white;
        }

        .hero h1 {
            font-size: 50px;
            margin-bottom: 10px;
        }

        .hero p {
            font-size: 20px;
        }

        /* Features Section */
        .features {
            display: flex;
            justify-content: center;
            gap: 30px;
            padding: 40px;
        }

        .card {
            background: #f5f5f5;
            padding: 20px;
            width: 250px;
            border-radius: 10px;
            text-align: center;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }

        .card h3 {
            margin-bottom: 10px;
        }

    </style>
</head>
<body>

    <!-- Navigation -->
    <nav>
        <div class="logo">My Website</div>
        <div>
            <a href="/">Home</a>
            <a href="/about">About</a>
        </div>
    </nav>

    <!-- Hero Section -->
    <div class="hero">
        <h1>Welcome to My Home page</h1>
        <p>A simple and beautiful HTML page created just for you.</p>
    </div>

     

    <!-- Features Section -->
    <div class="features">
        <div class="card">
            <h3>Fast</h3>
            <p>Lightning-fast loading speed and performance.</p>
        </div>

        <div class="card">
            <h3>Simple</h3>
            <p>Clean and minimal design for everyone.</p>
        </div>

        <div class="card">
            <h3>Responsive</h3>
            <p>Works smoothly on all screens & devices.</p>
        </div>
    </div>

</body>
</html>
`
let codeAbout=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>About Us</title>
  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: #f0f4ff;
      overflow-x: hidden;
    }

    .hero {
      height: 60vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background: linear-gradient(135deg, #4b7bec, #a55eea);
      color: white;
      animation: fadeIn 2s ease-in-out;
    }
      nav {
            background-color: #333;
            color: white;
            display: flex;
            justify-content: space-between;
            padding: 15px 40px;
            position: relative;
            Top:0;
        }

        nav a {
            color: white;
            text-decoration: none;
            margin-left: 20px;
            font-size: 18px;
        }

        nav a:hover {
            text-decoration: underline;
        }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    .container {
      padding: 40px;
      max-width: 900px;
      margin: auto;
      animation: slideUp 1.5s ease;
    }

    @keyframes slideUp {
      from {
        transform: translateY(30px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }

    .card {
      background: white;
      padding: 25px;
      border-radius: 15px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
      margin-bottom: 20px;
      transition: transform 0.3s ease;
    }

    .card:hover {
      transform: scale(1.03);
    }
  </style>
</head>
<body>
 
  <div class="hero">
  <nav>
        <div class="logo">My Website</div>
        <div>
            <a href="/">Home</a>
            <a href="/about">About</a>
        </div>
    </nav>
    <h1>About Us</h1>
  </div>

  <div class="container">
    <div class="card">
      <h2>Who We Are</h2>
      <p>We are a creative team dedicated to building modern, responsive, and user-friendly applications. Our mission is to deliver clean designs and powerful functionality.</p>
    </div>

    <div class="card">
      <h2>Our Vision</h2>
      <p>To innovate and inspire through technology by creating beautiful digital experiences with smooth animations and seamless interactions.</p>
    </div>

    <div class="card">
      <h2>Why Choose Us?</h2>
      <p>We combine design, technology, and creativity to bring your ideas to life with elegance and accuracy.</p>
    </div>
  </div>
</body>
</html>

`
module.exports={codehome,codeAbout};