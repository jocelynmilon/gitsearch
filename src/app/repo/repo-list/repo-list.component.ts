import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";

import { Load } from "../state/repos.actions";

//import { RepoService } from "./../repo.service";

@Component({
  selector: "app-repo-list",
  templateUrl: "./repo-list.component.html",
  styleUrls: ["./repo-list.component.css"]
})
export class RepoListComponent implements OnInit {
  constructor(private store: Store<any>) {}

  ngOnInit() {
    //this.repoService.getRepos().subscribe(data => console.log(data));
    this.store.dispatch(new Load());
  }
}
