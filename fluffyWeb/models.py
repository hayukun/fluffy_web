from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    # ユーザーモデルカスタム
    email = models.EmailField('メールアドレス', unique=True)
    post_code = models.CharField('郵便番号', max_length=7)
    address_prefecture = models.CharField('都道府県', max_length=10)
    address_city = models.CharField('市町村', max_length=100)
    address_house_number = models.CharField('番地', max_length=100)
    address_house_name = models.CharField('マンション名', max_length=100 )

class Orders(models.Model):
    # オーダー管理
    id = models.AutoField(primary_key=True)
    # セミオーダーではなくフルオーダーの場合はTrue
    is_fullorder = models.BooleanField(default=False)
    orders_user = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class FullOrderDetails(models.Model):
    id = models.AutoField(primary_key=True)
    order_id = models.ForeignKey(Orders, on_delete=models.CASCADE)
    panel_types = models.CharField(max_length=50, null=False)
    panel_types_additional_input = models.CharField(max_length=50, null=True)
    panel_types_price = models.IntegerField(null=False)

    mozi_size = models.CharField(max_length=20, null=False)
    mozi_size_price = models.IntegerField(null=False)

    # 何連、何枚
    panel_link_num = models.IntegerField(null=False)

    mozi_type = models.CharField(max_length=100, null=False)
    mozi_type_price = models.IntegerField(null=True) # 文字タイプの値段はnullを許容する

    # パネル文字
    panel_chara = models.TextField()
    panel_chara_price = models.IntegerField(null=True) # パネル文字の値段はnullを許容する

    # フォント
    font_name = models.CharField(max_length=50, null=True)
    font_name_price = models.IntegerField(null=False)
    font_name_additional_input = models.CharField(max_length=50, null=True)
    small_chara_font_num = models.CharField(max_length=5, null=True)

    # 装飾
    deco_font_tuya = models.BooleanField('ツヤ追加', default=False)
    deco_font_tuya_price = models.IntegerField(null=True)

    deco_font_charakatanuki = models.BooleanField('文字型抜き', default=False)
    deco_font_charakatanuki_price = models.IntegerField(null=True)
    deco_font_charakatanuki_additional_input = models.CharField(max_length=50, null=True)

    deco_font_partskatanuki = models.BooleanField('パーツ型抜き', default=False)
    deco_font_partskatanuki_price = models.IntegerField(null=True)
    deco_font_partskatanuki_additional_input = models.CharField(max_length=50, null=True)

    deco_font_marukatanuki = models.BooleanField('丸文字型抜き', default=False)
    deco_font_marukatanuki_price = models.IntegerField(null=True)
    deco_font_marukatanuki_additional_input = models.CharField(max_length=50, null=True)

    deco_font_dakuten_replace = models.BooleanField('濁点パーツ交換', default=False)
    deco_font_dakuten_replace_price = models.IntegerField(null=True)
    deco_font_dakuten_replace_additional_input = models.CharField(max_length=50, null=True)

    deco_font_choko = models.BooleanField('チョコがけ', default=False)
    deco_font_choko_price = models.IntegerField(null=True)

    deco_parts_name = models.CharField(max_length=200, null=True)
    deco_parts_set_name = models.CharField(max_length=100, null=True)
    deco_parts_name_additional_input = models.CharField(max_length=50, null=True)
    deco_parts_set_name_additional_input = models.CharField(max_length=50, null=True)