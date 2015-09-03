Welcome to another quickfire challenge! 

This assignment is to be completed alone. You should use old projects and class examples for guidance, and reference the APIs for technology you’re using. Seek to understand each step and what you need to do. 

If you need clarification, you may ask your instructors. Also feel free to send a slack message to your peers if your research and APIs lead you nowhere. Do not disturb your neighbors. If the time reaches 5PM, you may head out for the day after you’ve committed your code to Github under “prime_quickfire_templates”. (Email a link to your instructors)

However far you get, know that you are doing an amazing job! These are very difficult concepts that typically take up to a year to be able to program on your own. You’re creating mock databases, APIs and using backend server templates! That’s huge!!! 

1. Create a new application in Webstorm. Make sure that you’ve chosen Jade as the default template rendering engine.

2. Create a file in /models/ named “students.json”, that contains just an empty array: [].

3.Rename the users.js route to “students.js”. 

4. Change the url of /users in the server-side app.js to be /students.

5. Change the GET method of the students.js route to be a JSON response, containing the contents of the students.json file. HINT: try requiring the json file.

6. Test this route using Postman. Set the URL to http://localhost:3000/students and set the drop down to “GET”, and you should see an empty array come back.

7. Create a new POST route in /students.

8. In your POST route, read in the students.json file and put it in a variable named “studentsArray”. 

9. Push a new object that contains the req.body.firstName and req.body.lastName to this array. 

10. Then, use fs.writeFile to write a JSON.stringify version of the studentArray back into the student.json file.

11. Finally, inside the callback function of fs.writeFile, send back a status of 200. Hint: use res.sendStatus.

12. Test the route in Postman by setting the method to POST, and choosing “body”, and then “x-www-url-form-encoded”. Type in a key of firstName, with any value, and a key of lastName with any value. If there is no error, you should get back a 200 OK.

13. Check the GET method again in Postman and see if you have your new object in the array. If not, test everything with lots of console.logs and see where you might have gone wrong.

14. Alter your index.jade template to display the students inside of a UL with id='contents'. You can do this either via Ajax, or by sending it using res.render.

15. Create an Ajax form that creates a new student, by sending the form data to /student using the method POST. 

16. When your Ajax is complete, run another Ajax request. Query /students using the GET method, and rewrite the UL with id='contents' with the updated list using the new data from Ajax. Feel free to use either jQuery DOM elements, or Handlebars, which ever you’re more comfortable with.

Your finished project should load http://localhost:3000 in the browser, and show a list of all students. You should be able to create new students, and see the list refresh with all of the students. Refreshing the page should maintain the same list.

When you are done, you may leave for the day. If you want to go back and work on an older assignment, that’s perfectly fine. Just know that there are others who may still be working, and do not disturb them.
