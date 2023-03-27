# ES6 DATA MANIPULATION

File | Description
---- | -----------
[0-get_list_students.js](./0-get_list_students.js) | Script that conatins function ***getListStudents*** that returns and array of objects.
[1-get_list_student_ids.js](./0-get_list_student_ids.js) | Function that takes one argument, which is an array of objects, and is same format as one of ***[0-get_list_student_ids.js](./0-get_list_students.js)***.<br>Function returns an array of ids from a list of object.
[2-get_students_by_loc.js](./2-get_students_by_loc.js) | Function that returns array of objects who are located in a specific city.<br>~ It accepts a list of students from ***getListStudent*** and a city as paramters.
[3-get_ids_sum.js](./3-get_ids_sum.js) | Function that returns sum of all the students ids.<br>~ Reduce function must be used on the array.
[4-update_grade_by_city.js](./4-update_grade_by_city.js) | Script containing function that returns an array of students for a specific city with their new grade.<br>~ newGrades is an array of objects.<br>~ If a student doesn't have a grade in ***newGrades*** the final grade should be **N/A**.<br>~ Filter and map must be used combined.
[5-typed_array.js](./5-typed_array.js) | Script containing function that returns a new ***ArrayBuffer*** with an ***Int8*** value at a specific position.<br>~ If adding values is not possible error ***Position outside range*** is thrown.
[6-set.js](./6-set.js) | Script containing function ***SetFromArray*** that returns a ***Set*** from an array.
[7-has_array_values.js](./7-has_array_values.js) | Script conatining function that returns a boolean if all elements in the array exist within the set.
[8-clean_set.js](./8-clean_set.js) | Script containing function that returns a string of all the set values that start with a specific string ***(startString)***.<br>~ When values starts with ***startString*** only the rest of the string is appended.<br>~ The string contains all values of the set seperated by **-**.
[9-groceries_list.js](./9-groceries_list.js) | Script containing function that returns a map of groceries with items ***(name, quantity)***.
[10-update_uniq_items.js](./10-update_uniq_items.js) | Script containing function that returns an updated map of all items with initial quality at 1.<br>~ Map accepted for argument is similar with one create in [9-groceries_lists.js](./9-groceries_list.js).<br>~ For each entry of map where quantity is 1, it's updated to 109.<br>~ If updating quantity is not possible error ***Cannot Process*** is thrown.
[100-weak.js](./100-weak.js) | Script containing function that exports a ***const*** instance of ***WeakMap*** and names it ***WeakMap***.<br>~ A new function, ***queryAPI*** is also exported.<br>~ Number of times ***queryAPI*** is called for each endpoint is tracked withing ***weakMap***.<br>~ When the number of queries is greter than or equal to five an error message ***Endpoint load is high*** should be occur.
