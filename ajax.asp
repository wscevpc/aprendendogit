<!-- #include file="ASPJSON.asp" -->

<!-- <h4>
Treinamento JS - Alfredo
</h4> -->

<%

dim retornoJson

dim chave(10)
dim valor(10)

dim i

for i = 0 to 9
	chave(i) = i
	valor(i) = i & " - valor"
next

set retornoJson = new ASPJSON

retornoJson.LetChave = chave
retornoJson.LetValor = valor

response.write(retornoJson.Cria_JSON())

set retornoJson = nothing

%>