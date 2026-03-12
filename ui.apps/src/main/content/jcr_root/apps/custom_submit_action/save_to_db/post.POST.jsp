<%@page import="org.w3c.dom.*"%>
<%@page import="javax.xml.parsers.*"%>
<%@page import="java.io.*"%>

<%

String xmlData = request.getParameter("jcr:data");

InputStream stream = new ByteArrayInputStream(xmlData.getBytes("UTF-8"));

DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
DocumentBuilder builder = factory.newDocumentBuilder();
Document doc = builder.parse(stream);

String name = doc.getElementsByTagName("name").item(0).getTextContent();
String email = doc.getElementsByTagName("email").item(0).getTextContent();
String message = doc.getElementsByTagName("message").item(0).getTextContent();


// set values
request.setAttribute("name", name);
request.setAttribute("email", email);
request.setAttribute("message", message);

// forward to servlet
request.getRequestDispatcher("/bin/submitForm")
       .forward(request, response);

%>