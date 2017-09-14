var SpriteUtility = function()
{

    this.m_Initialized = false;
    this.m_spritesheet = "";

    this.m_TileWidth = 0;
    this.m_TileHeight = 0;
    this.m_ScaleX = m_TileWidth;
    this.m_ScaleY = m_TileHeight;
    this.m_Row = 0;
    this.m_Col = 0;



    this.init = function()
    {

    }

    this.Frame = function()
    {
        this.m_TileWidth = 0;
        this.m_TileHeight = 0;
        this.m_Row = 0;
        this.m_Col = 0;

        this.prototype.createFrames = function()
        {

        }
    }

    this.anim = 

    this.RenderSprite = function(DeltaTime,Frames)
    {
        context.drawImage(m_spritesheet,m_Row,m_Col,m_TileWidth,m_TileHeight,m_ScaleX,m_ScaleY);
    }

};