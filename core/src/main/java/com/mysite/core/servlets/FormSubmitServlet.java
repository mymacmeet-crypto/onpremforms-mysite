package com.mysite.core.servlets;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

import javax.servlet.Servlet;
import javax.servlet.ServletException;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.servlets.ServletResolverConstants;
import org.apache.sling.api.servlets.SlingAllMethodsServlet;
import org.osgi.service.component.annotations.Component;

@Component(service = Servlet.class, property = { ServletResolverConstants.SLING_SERVLET_PATHS + "=/bin/submitForm",
		ServletResolverConstants.SLING_SERVLET_METHODS + "=POST" })
public class FormSubmitServlet extends SlingAllMethodsServlet {
	protected void doPost(SlingHttpServletRequest request, SlingHttpServletResponse response)
			throws ServletException, IOException {

		String name = request.getParameter("name");
		String email = request.getParameter("email");
		String message = request.getParameter("message");

		try {

			Class.forName("org.postgresql.Driver");

			Connection conn = DriverManager.getConnection("jdbc:postgresql://localhost:5432/postgres", "postgres",
					"admin");

			PreparedStatement ps = conn.prepareStatement("INSERT INTO customer_form_data(name,email,message) VALUES (?,?,?)");

			ps.setString(1, name);
			ps.setString(2, email);
			ps.setString(3, message);

			ps.executeUpdate();

			conn.close();

			response.getWriter().write("Saved Successfully");

		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
