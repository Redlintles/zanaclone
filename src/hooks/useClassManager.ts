export type classItem = [boolean | undefined, string];

interface ClassManagerInterface {
  result: string;
  classes: Array<classItem>;
  initialClass: string;
  process(): void;
  append(item: classItem): void;
  remove(item: classItem): void;
  getResult(): string;
}

export default function useClassManager(
  initialClass: string,
  classes: Array<classItem>
) {
  class ClassManager implements ClassManagerInterface {
    result: string;
    classes: Array<classItem>;
    initialClass: string;

    constructor(initialClass: string, classes: Array<classItem>) {
      this.result = initialClass;
      this.initialClass = initialClass;
      this.classes = classes;
      this.process();
    }

    getResult() {
      return this.result;
    }

    process(): void {
      this.result = initialClass;
      for (const item of this.classes) {
        if (item[0]) {
          this.result += ` ${item[1]}`;
        }
      }
    }

    append(item: classItem): void {
      this.classes.push(item);
      this.process();
    }

    remove(item: classItem): void {
      this.classes = this.classes.filter((classItem) => {
        if (!(classItem[0] === item[0] && classItem[1] === item[1])) {
          return classItem;
        }
      });
      this.process();
    }
  }

  return [new ClassManager(initialClass, classes)];
}
