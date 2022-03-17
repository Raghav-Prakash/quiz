import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionsComponent } from 'src/app/questions/questions.component';
import { StartQuizFormComponent } from 'src/app/start-quiz-form/start-quiz-form.component';
import { QuestionsGuardService as QuestionsGuard } from 'src/app/guards/questions-guard.service';

const routes: Routes = [
  { path: '', component: StartQuizFormComponent },
  {
    path: 'questions',
    component: QuestionsComponent,
    canActivate: [QuestionsGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
