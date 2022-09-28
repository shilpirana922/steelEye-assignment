## 1.Explain what the simple `List` component does.
    
The List component iterates over the array of objects named as items. It renders the singleListElement component 
for all the items of array and display the list items by passing the items object text. SingleListItem will maintain
a boolean state selectedIndex and on clicking on any list item the background colore will get change. In list component the 
WrappedListComponent.propTypes  defines the type of the props this component will receive.

## 2.What problems / warnings are there with code?

a. setSelectedIndex(index) this is a boolean type so remove index which is an in integer.</br>
b. incorrect syntax of setSelectedIndex and It was present in the wrong component List.</br> 
    SingleListeItem component must have this state variable.</br>
c. remove isSelected and update selectIndex.</br>
d. Update handleClick function and update the selectedIndex with a boolean value</br>
e. SingleListItem component must have a key prop while rendering inside List component without </br>
   this it will show a warning on browser console.</br>
f. Incorrect syntax of defining shape of proptype inside List component</br>

## 3. Please fix, optimize, and/or modify the component as much as you think is necessary.
   
   Here, I am proving the fixed and modified code in this github repo.
