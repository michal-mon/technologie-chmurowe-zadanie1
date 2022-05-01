<h1>Technologie Chmurowe - Zadanie 1</h1>
<h2>Część obowiązkowa</h2>
<h3>Autor: Michał Moń</h3>
<h4>Opis repozytorium:</h4>
<p>Repozytorium składa się z katalogu "src", czyli kodu źródłowego serwera oraz pliku Dockerfile.<br/><br/>
Serwer został napisany w języku JavaScript z wykorzystaniem serwera Express oraz biblioteki Axios. Wykorzystuje on również API <a href="https://ipwhois.io/" target="">ipwhois</a> w celu otrzymania adresu IP, za pomocą którego zostaje wyznaczona strefa czasowa. Serwer domyślnie nasłuchuje na porcie 5000.</br><br/>Dockerfile...</p>
<h4>Użyte polecenia:</h4>
<ol>
<li><b>docker buildx create --name builder1</b> - utworzenie nowego buildera o nazwie "builder1"</li>
<li><b>docker buildx use builder1</b> - przekazanie informacji do buildx, aby używał buildera "builder1"</li>
<li><b>docker buildx inspect --bootstrap</b> - wyświetlenie inforamcji o builderze oraz uruchomienie go</li>
<li><b>docker buildx build -f Dockerfile -t michalmon/tch-z1:test --platform linux/arm/v7,linux/arm64/v8,linux/amd64 --push .</b> - zbudowanie obrazu na architektury: linux/arm/v7, linux/arm64/v8, linux/amd64 (zgodnie z poleceniem) oraz nadanie obrazowi nazwy "michalmon/tch-z1:test" i wypchnięcie go do repozytorium na Dockerhub (michalmon/tch-z1)</br>Link: <a href="https://hub.docker.com/repository/docker/michalmon/tch-z1">Repozytorium Dockerhub</a></li>
</ol>
