/**
 * Created by lusinabrian on 04/03/17.
 */
const AddressBook  = require("../../jssnips/Objects/AddressBook/AddressBook");
const Contact = require("../../jssnips/Objects/AddressBook/Contact");

test("Address Book", function(){
  let addressBook, thisContact;

  /**
   * setup each spec with new slate*/
  beforeEach(function(){
    addressBook = new AddressBook();
    thisContact = new Contact();
  });

  test("should be able to add a contact", function(){
    addressBook.addContact(thisContact);

    expect(addressBook.getContact(0)).toBe(thisContact);
  });

  test("should be able to delete a contact", function(){

    addressBook.addContact(thisContact);
    addressBook.deleteContact(thisContact);

    expect(addressBook.getContact(0)).not.toBeDefined();

  });

});


test("Async Address book", function(){
  const addressBook = new AddressBook();

  /**
   * Adding done to the callback of getInitialContact() function ensures that the testing framework
   * mocks the api fetch from original function before fetching and testing the values
   * */
  beforeEach(function(done){
    addressBook.getInitialContacts(function(){
      done();
    });
  });

  test("should grab initial contacts", function(done){
    expect(addressBook.initialComplete).toBe(true);
    done();
  });
});
