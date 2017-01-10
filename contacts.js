/**
 * Build a content management system for things.
 * 
 * Create a menu app. You should be able to add items and view the menu. Your application should include two 
 * different 'views' (not actual html files, but different DOM's being displayed). You don't need to worry about 
 * styling.
 * 
 * You should have a pair of links at the top of your page that allow you to navigate between the views 
 * (see hint below).
 * 
 * The first view should allow users to add new foods. Foods should have at least a name, a description, and a price.
 * The second view should allow users to view the whole menu. You should display all foods as well as their name, 
 * description, and price. Add a text box at the top of the menu view and filter down the list of foods to those that 
 * include the search string in the name.
 * 
 * You should have a main app.js and at least one other JS file. I'd suggest making a separate one to include
 * 
 * Approaching this
 * 
 * Tackle it, like all things, piece by piece. You do not have to use map and filter, but you can if you want to. 
 * You don't have to use callbacks, but it'd be good to practice if you can. You're practicing writing a full app 
 * here, so think about the problem holistically and then break it into pieces.
 * 
 * You do not need to use Ajax.
 * 
 * Tackle one view at a time.
 * 
 * Create fake data to start with and replace it with real data later.
 * Think of the functionality you'll need and how you could organize it to make it easier on yourself.
 * 
 * Hint: multiple views
 * 
 * It's common these days to have your app run on a single HTML page, and have JS change the content; 
 * the 'old' way is to refresh the page completely whenever you want to go to another page, but (like AJAX) that 
 * feels a lot slower and less fluid from a user perspective.
 * 
 * Consider the following layout. You can change which 'page' shows up by modifying which of your div's has the 
 * hidden class applied. This will not work directly if copied + pasted, so think through it.

<body>
  <!-- One 'view', which shows a list of dogs -->
  <div class="view-show-dogs">
    <h1>List of dogs</h1>
    <ul>
       ... dogs ...
    </ul>
  </div>
  <!-- Another 'view', which allows us to add a dog -->
  <!-- This one starts off hidden (see class 'hidden') -->
  <div class="view-add-dog hidden">
    <h1>Add a dog</h1>
    <input type="text" id="dog-name" placeholder="Dog name">
    <button id="submit">Add</button>
  </div>
</body>

* Hard mode

* Give users a way to delete items.
 */
/**
 * Steps:
 * 1. Create structure in HTML, add details. This will include two sections: 
 *    a.) a text box with a button and a class feature of hidden and 
 *    b.)  menu items and details such as description and price
 * 2. There should be two links at the top to switch between the two "views"
 * 3. Second view should have text box at the top to filter down items within the menu. Perhaps, then, the items 
 *    should be created JS so that they can be referenced for filtering. This sounds like autocomplete
 * 4. Use JS to manipulate the DOM (i.e., add menu items via hidden view.)
 * 5. Also, there should be two JS pages. Perhaps one would contain menu info and how to filter it and t'other would 
 *    include code for adding menu items
 */