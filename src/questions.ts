interface IQuestions {
  text: string;
  answers: string[];
  correctAnswer: number;
}

export const questions: IQuestions[] = [
  {
    text: 'Как вывести список удалённых репозиториев с именем и url?',
    answers: ['git repository', 'git show', 'git remote', 'git remote -v'],
    correctAnswer: 4,
  },
  {
    text: 'Как проиндексировать файлы и сделать коммит одной командой?',
    answers: [
      'git commit-add -m "Comment"',
      'git commit -m "Comment"',
      'git commit -add -m "Comment"',
      'git commit -a -m "Comment"',
      'git commit --add -m "Comment"',
    ],
    correctAnswer: 4,
  },
  {
    text: 'Как просмотреть список меток?',
    answers: ['git show --labels', 'git tag', 'git labels', 'git label'],
    correctAnswer: 2,
  },
  {
    text: 'Как создать новую ветку с именем dev?',
    answers: [
      'git create dev',
      'git new dev',
      'git branch new dev',
      'git branch dev',
      'git create subtree dev',
    ],
    correctAnswer: 4,
  },
  {
    text: 'Какова минимальная длина SHA-1 хэша должна быть, чтобы можно было просмотреть информацию о коммите?',
    answers: ['3 символа', '4 символа', '5 символов', '6 символов'],
    correctAnswer: 2,
  },
  {
    text: 'Какой текстовый редактор используется по умолчанию в git?',
    answers: [
      'notepad',
      'Установленный по умолчанию в системе',
      'vim',
      'emacs',
    ],
    correctAnswer: 2,
  },
  {
    text: 'Как посмотреть id коммита?',
    answers: ['git info', 'git log', 'git commit id', 'git id'],
    correctAnswer: 2,
  },
  {
    text: 'Как «спрятать» данные в git?',
    answers: [
      'git unsave',
      'git check --hide',
      'git stash',
      'git visible --false',
      'git hide',
    ],
    correctAnswer: 3,
  },
  {
    text: 'Как перейти из ветки master в ветку dev?',
    answers: [
      'git branch master dev',
      'git checkout dev',
      'git move dev',
      'git change master dev',
    ],
    correctAnswer: 2,
  },
];
