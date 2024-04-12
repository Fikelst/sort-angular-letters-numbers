import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-app';
  inputText: string = '';
  sortedItems: any = '';
  sortAscending: boolean = true;

  sortItems() {
    // Jeśli wprowadzony tekst zawiera tylko cyfry, sortujemy liczby
    if (/^\d+$/.test(this.inputText)) {
      // Jeśli sortujemy od A do Z
      if (this.sortAscending) {
        this.sortedItems = this.inputText.split('').map(Number).sort((a, b) => a - b);
      } else { // Jeśli sortujemy od Z do A
        this.sortedItems = this.inputText.split('').map(Number).sort((a, b) => b - a);
      }
    } else { // Jeśli wprowadzony tekst zawiera litery, sortujemy litery
      // Jeśli sortujemy od A do Z
      if (this.sortAscending) {
        this.sortedItems = this.inputText.split('').sort().join('');
      } else { // Jeśli sortujemy od Z do A
        this.sortedItems = this.inputText.split('').sort().reverse().join('');
      }
    }
    // Zmiana kolejności sortowania na przeciwną
    this.sortAscending = !this.sortAscending;
  }
}
