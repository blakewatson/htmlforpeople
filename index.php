<?php 

require_once "config.php";

$email = $_POST['email'] ?? null;

if ($email) {
  $emails = file_get_contents(PATH_TO_DATA);
  $emails = explode(PHP_EOL, $emails);

  if (!in_array($email, $emails) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $success = file_put_contents(PATH_TO_DATA, $email . PHP_EOL, FILE_APPEND);
  }
}

?>
<!DOCTYPE html>

<html lang="en" data-theme="light">

  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    <title>HTML for People</title>
    <link rel="stylesheet" href="/css/pico.red.min.css" />
    <link rel="stylesheet" href="/css/style.css" />
  </head>
  
  <body>
    <header class="container">
      <img class="logo" src="/img/logo.svg" alt="HTML for People">
    </header>

    <main class="container">
      <?php if ($email): ?>
        <hgroup>
          <h2>Thanks!</h2>
          <p>I’ll let you know when HTML for People is ready.</p>
        </hgroup>
      <?php endif; ?>

      <p>I’m working on a tutorial series all about getting started making websites with HTML. It’s a beginner-level series aimed at people who may or may not have career aspirations as web developers. I don’t think websites were ever intended to be made only by “web professionals.” They are documents at heart and anyone should be able to make one if they want. Knowing how to write HTML and put it on the internet is a skill that’s valuable to all kinds of careers and personal pursuits. HTML is for anyone.</p>

      <?php if (!$email): ?>

        <p>If you want me to email you when the series is ready, leave your email address below. I won't spam you, sell your email address, or use it for anything other than letting you know when the series is released.</p>

        <form action="/" method="post">
          <label>
            <strong>Email</strong>
            <input type="email" name="email">
          </label>

          <button type="submit">Notify me!</button>
        </form>

      <?php endif; ?>
    </main>

    <footer class="container">
      <p>A <a href="https://blakewatson.com/">Blake Watson</a> project.</p>
    </footer>
  </body>
  
</html>