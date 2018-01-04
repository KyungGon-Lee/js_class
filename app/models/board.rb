class Board < ActiveRecord::Base
  belongs_to :user
  has_many :likes
  has_many :comments

  paginates_per 50
  # 50페이지로 디폴트값 변경
  def require_permission?(user)
    # 보드의 객체중 하나가 self가 됨
    # board = Board.create(:title "김밥킹")
    self.user.id == user.id
    # 리턴타입 위에꺼가 true or false가 될 것임
  end
end
