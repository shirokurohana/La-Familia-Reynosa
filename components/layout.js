import Head from 'next/head';
import Link from 'next/link';

export default function Layout( { children, home } ) {
  return (
    <div>
      <Head>
        <title>My family</title>
      </Head>
      <header>
        <nav class="navbar sticky-top bg-info navbar-expand-lg navbar-light">
          <div class="container-fluid">
            <Link href="/">
              <a class="navbar-brand">La Familia Reynosa</a>
            </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item">
                <Link href="/">
                 <a class="nav-link active" aria-current="page">Home</a>
                </Link>
                </li>
                <li class="nav-item">
                  <Link href="/2">
                    <a class="nav-link">Esteban Reynosa</a>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link href="/1">
                    <a class="nav-link">Maria Reynosa</a>
                  </Link>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    More
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li>
                      <Link href="/3">
                        <a class="dropdown-item">Ofelia</a>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main>{children}</main>
      {!home && (
          <Link href="/">
            <a class="btn btn-outline-primary mt-3">&#127968; Go back home</a>
          </Link>
        )
      }
      <footer>
        <p>The footer</p>
      </footer>
    </div>
  );
}