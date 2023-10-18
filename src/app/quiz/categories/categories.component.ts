import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/shared/category.service';
import { QuizzService } from 'src/app/shared/quizz.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  categories: any[] = [];
  filteredCategories: any[] = [];
  searchForm!: FormGroup;
  playerName!: string;
  quizContent: any[] = [];

  constructor(
    private categoryService: CategoryService,
    private fb: FormBuilder,
    private quizService: QuizzService,
    private router: Router,
  ) {
    this.categoryService.getCategories().subscribe((cat: any) => {
      this.categories.push(...cat);
      this.filteredCategories = this.categories;
      // console.log('categories gtggggg', this.categories.length);
    });
  }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      search: [''],
    });
    this.playerName = this.quizService.playerName;
  }

  search(): void {
    const { search } = this.searchForm.value;
    if (search) {
      this.filteredCategories = this.categories.filter((c) =>
        this.normalizeString(c.name).includes(this.normalizeString(search))
      );
    }
  }

  normalizeString(input: string): string {
    return input
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  }

  reset(): void {
    this.filteredCategories = this.categories;
    this.searchForm.reset();
    }

  getQuizzByCategory(categoryId: number) {
    this.quizContent = this.quizService.getQuizContent(categoryId)
    this.router.navigate([`categories/${categoryId}` ]);
  }
  // ngOnDestroy(): void {
  //   this.categoryService.getCategories().subscribe((cat: any) => {
  //     this.categories.push(...cat);
  //     console.log('categories', this.categories);
  //   });
  // }
}
