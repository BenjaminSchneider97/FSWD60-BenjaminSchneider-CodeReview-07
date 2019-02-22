import { Component, OnInit } from '@angular/core';
import { ContactService } from "../shared/contact.service";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
	contactArray =[];
	constructor(private contactService: ContactService) { }

  ngOnInit() {
  	 this.contactService.getContact().subscribe(
  	 	(list) => {
  	 		this.contactArray = list.map( (item) => {
                                return {
                                        $key : item.key,
                                        ...item.payload.val()
                                    }
                                })
  	 		});
	}
}
