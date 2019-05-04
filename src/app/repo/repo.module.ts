import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { RepoListComponent } from "./repo-list/repo-list.component";

import { StoreModule } from "@ngrx/store";
import { reducer } from "./state/repo.reducer";

@NgModule({
  declarations: [RepoListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature("repos", reducer)
  ],

  exports: [RepoListComponent]
})
export class RepoModule {}
