import { BrowserModule } from '@angular/platform-browser';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { HomeComponent } from './screens/home/home.component';
import { Grupo5Component } from './screens/grupo-5/grupo-5.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { StandardFormComponent } from './components/standard-form/standard-form.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './components/card/card.component';

import { ChipListComponent } from './components/chip-list/chip-list.component';
import { ChipComponent } from './components/chip/chip.component';
import { DisciplinesScreenComponent } from './screens/disciplines-screen/disciplines-screen.component';
import { ClassRoomComponent } from './screens/class-room/class-room.component';

import { PrediosComponent } from './components/predios/predios.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { StandardModalComponent } from './components/standard-form/modal/standard-modal/standard-modal.component';
import { CommonModule } from '@angular/common';
import { ListBuildingsComponent } from './screens/buildings-rooms/list-buildings/list-buildings.component';
import { ListRoomsComponent } from './screens/buildings-rooms/list-rooms/list-rooms.component';
import { AddBuildingComponent } from './screens/buildings-rooms/add-building/add-building.component';
import { AddRoomComponent } from './screens/buildings-rooms/add-room/add-room.component';

import { ReservasComponent } from './screens/reservas/reservas.component';
import { LessonScreenComponent } from './screens/lesson-screen/lesson-screen.component';
import { EditBuildingComponent } from './screens/buildings-rooms/edit-building/edit-building.component';
import { EditRoomComponent } from './screens/buildings-rooms/edit-room/edit-room.component';
import { TypesResourcesComponent } from './screens/types-resources/types-resources.component';

import { UserListComponent } from './screens/grupo-1/user-list/user-list.component';
import { GroupListComponent } from './screens/grupo-1/group-list/group-list.component';

@NgModule({
  declarations: [
    HomeComponent,
    Grupo5Component,
    TypesResourcesComponent,
    StandardFormComponent,
    ChipListComponent,
    ChipComponent,
    SidenavComponent,
    StandardFormComponent,
    StandardModalComponent,
    CardComponent,
    PrediosComponent,
    ListBuildingsComponent,
    ListRoomsComponent,
    AddBuildingComponent,
    EditBuildingComponent,
    ReservasComponent,
    DisciplinesScreenComponent,
    ClassRoomComponent,
    LessonScreenComponent,
    AddRoomComponent,
    EditRoomComponent,
    UserListComponent,
    GroupListComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatSidenavModule,
    MatNativeDateModule,
    MatRippleModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDividerModule,
    MatDialogModule,
    MatCardModule,
  ],
  bootstrap: [HomeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
