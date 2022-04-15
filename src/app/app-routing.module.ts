import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionsComponent } from 'src/app/questions/questions.component';
import { StartQuizFormComponent } from 'src/app/start-quiz-form/start-quiz-form.component';
import { FinishPageComponent } from 'src/app/finish-page/finish-page.component';
import { QuestionsGuardService as QuestionsGuard } from 'src/app/guards/questions-guard.service';

const routes: Routes = [
  { path: 'home', component: StartQuizFormComponent },
  {
    path: 'questions',
    component: QuestionsComponent,
    canActivate: [QuestionsGuard]
  },
  { path: 'finish', component: FinishPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
